import React from 'react';

interface ImageProps {
  filename: string;
  alt: string;
}

interface PostProps {
  id: string;
  date: string;
  content: {
    slug: string;
    image?: ImageProps;
    title: string;
    description: string;
  };
  tag_list: string[];
}

interface PostCardProps {
  post: PostProps;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const postContent = post.content;
  
  return (
    <article className="column feature rounded shadow-lg">
      <a href={`/blog/${postContent.slug}`}>
        {postContent.image ? (
          <img
            className="object-cover object-center w-full lg:h-48 md:h-36 rounded-t"
            src={`${postContent.image.filename}/m/360x240`}
            alt={postContent.image.alt}
          />
        ) : (
          <div className="bg-primary-100 w-full lg:h-48 md:h-36 rounded-t" />
        )}
        <div className="p-4 flex flex-col gap-2">
          <p className="text-sm text-gray-400">{post.date}</p>
          <p className="text-lg font-medium text-gray-800 line-clamp-3">
            {postContent.title}
          </p>
          <p className="font-light text-gray-600 text-md line-clamp-3">
            {postContent.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center m-2 justify-starts gap-2">
          {post.tag_list.map((tag) => (
            <div key={tag} className="text-xs py-1.5 px-4 text-secondary-600 bg-secondary-50 border-secondary-600 border rounded">
              {tag}
            </div>
          ))}
        </div>
      </a>
    </article>
  );
};

export default PostCard;
