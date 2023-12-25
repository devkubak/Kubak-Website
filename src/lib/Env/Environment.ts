export namespace Environment {
  let PROCESS: any;

  const ENVIRONMENT = PROCESS?.env ? PROCESS.env : import.meta.env;

  // Appwrite Config
  export const appwrite_endpoint: string = ENVIRONMENT.VITE_APPWRITE_ENDPOINT;
  export const appwrite_project: string = ENVIRONMENT.VITE_APPWRITE_PROJECT;

  // Appwrite Database
  export const appwrite_database: string =
    ENVIRONMENT.VITE_APPWRITE_DATABASE_ID;

  // Appwrite Collections
  export const appwrite_collection_carousel: string =
    ENVIRONMENT.VITE_APPWRITE_CAROUSEL_ID;
  export const appwrite_collection_development: string =
    ENVIRONMENT.VITE_APPWRITE_DEVELOPMENT_PROCESS_ID;
  export const appwrite_collection_projects: string =
    ENVIRONMENT.VITE_APPWRITE_OUR_PROJECTS_ID;
  export const appwrite_collection_technology: string =
    ENVIRONMENT.VITE_APPWRITE_TECHNOLOGIES_ID;
  export const appwrite_collection_technology_attribute: string =
    ENVIRONMENT.VITE_APPWRITE_TECHNOLOGIES_ATTRIBUTE_ID;
  export const appwrite_collection_footer: string =
    ENVIRONMENT.VITE_APPWRITE_FOOTER_ID;

  // Appwrite Storage
  export const appwrite_storage: string = ENVIRONMENT.VITE_APPWRITE_STORAGE_ID;
}
