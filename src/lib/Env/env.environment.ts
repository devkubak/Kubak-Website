let process: any;

const ENVIROMENT = process?.env ? process.env : import.meta.env;

// Appwrite Config
export const appwrite_endpoint = ENVIROMENT.VITE_APPWRITE_ENDPOINT;
export const appwrite_project = ENVIROMENT.VITE_APPWRITE_PROJECT;

// Appwrite Database
export const appwrite_database = ENVIROMENT.VITE_APPWRITE_DATABASE_ID;

// Appwrite Collections
export const appwrite_collection_carousel =
  ENVIROMENT.VITE_APPWRITE_CAROUSEL_ID;
export const appwrite_collection_development =
  ENVIROMENT.VITE_APPWRITE_DEVELOPMENT_ID;
export const appwrite_collection_projects =
  ENVIROMENT.VITE_APPWRITE_PROJECTS_ID;
