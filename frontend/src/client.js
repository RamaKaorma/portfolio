import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-07-15',
    useCdn: true,
    apiKey: process.env.VITE_REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
