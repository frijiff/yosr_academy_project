import { Client, Databases, Storage, ID } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

export const db = new Databases(client);
export const storage = new Storage(client);
export const IDUtil = ID; // to generate IDs in the app
export default client;