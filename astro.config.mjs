import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

import react from "@astrojs/react";

const env = loadEnv("", process.cwd(), 'PUBLIC_STORYBLOK');

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [tailwind(), react(),
  storyblok({
    accessToken: env.PUBLIC_STORYBLOK_TOKEN,
    components: {
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      feature: 'storyblok/Feature',
      getStarted: 'storyblok/GetStarted',
      grid: 'storyblok/Grid',
      hero: 'storyblok/Hero',
      image: 'storyblok/Image',
      page: 'storyblok/Page',
      pageHeader: 'storyblok/PageHeader',
      pageSection: 'storyblok/PageSection',
      rows: 'storyblok/Rows',
      teamList: 'storyblok/TeamList',
      teamMember: 'storyblok/TeamMember',
      testimonial: 'storyblok/Testimonial',
      testimonialsList: 'storyblok/TestimonialList',

    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'EU', // optional,  or 'eu' (default)
    },
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});