import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import StoryblokClient from 'storyblok-js-client';

const storyblok = new StoryblokClient({
   accessToken: import.meta.env.PUBLIC_STORYBLOK_TOKEN,
});

interface Tag {
   name: string;
   taggings_count: number;
}

interface TagFilterProps {
   tags: Tag[];
   initialPosts: any[];
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, initialPosts }) => {
   const [posts, setPosts] = useState<any[]>(initialPosts);
   const [selectedTag, setSelectedTag] = useState<string | null>(null);

   const onTagClick = async (tag: string) => {
      setSelectedTag(tag);
      const filteredPosts = await fetchPostsByTag(tag);
      setPosts(filteredPosts);
   };

   const fetchPostsByTag = async (tag: string): Promise<any[]> => {
      try {
         const { data } = await storyblok.get(
            'cdn/stories/',
            {
               version: import.meta.env.DEV ? 'draft' : 'published',
               with_tag: tag,
               is_startpage: false,
            }
         );

         return data.stories.map((story: any) => {
            return {
               ...story,
               date: new Date(story.published_at).toLocaleDateString('en-GB', { dateStyle: 'full' }),
            };
         });
      } catch (err) {
         console.error('Error fetching posts:', err);
         return [];
      }
   };


   return (
      <div>
         <div className="flex flex-wrap items-center m-6 justify-starts gap-2 my-8">
            {tags.map((tag) => (
               <button
                  className={`text-xs py-1.5 px-4 text-secondary-600 bg-secondary-50 border-secondary-600 border rounded hover:bg-secondary-200 ${selectedTag === tag.name ? 'bg-secondary-200' : ''}`}
                  type="button"
                  id={tag.name} key={tag.name} onClick={() => onTagClick(tag.name)}>
                  {tag.name} x{tag.taggings_count}
               </button>

            ))}
         </div>
         <section>
            <div className="m-6 mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {
                  posts?.length &&
                  posts.map((post, i) => {
                     post.content.slug = post.slug;
                     return <PostCard post={post} key={i} />;
                  })
               }
            </div>
         </section>
      </div>
   );
};

export default TagFilter;
