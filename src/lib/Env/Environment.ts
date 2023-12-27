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
  export const appwrite_collection_development_process: string =
    ENVIRONMENT.VITE_APPWRITE_DEVELOPMENT_PROCESS_ID;
  export const appwrite_collection_our_projects: string =
    ENVIRONMENT.VITE_APPWRITE_OUR_PROJECTS_ID;
  export const appwrite_collection_technologies: string =
    ENVIRONMENT.VITE_APPWRITE_TECHNOLOGIES_ID;
  export const appwrite_collection_technology_attribute: string =
    ENVIRONMENT.VITE_APPWRITE_TECHNOLOGIES_ATTRIBUTE_ID;
  export const appwrite_collection_footer: string =
    ENVIRONMENT.VITE_APPWRITE_FOOTER_ID;
  export const appwrite_collection_products: string = ENVIRONMENT.VITE_APPWRITE_PRODUCTS_ID;
  export const appwrite_collection_product_attributes: string = ENVIRONMENT.VITE_APPWRITE_PRODUCT_ATTRIBUTES_ID;
  export const appwrite_collection_about_us: string =
    ENVIRONMENT.VITE_APPWRITE_ABOUT_US_ID;

  // Appwrite Storage
  export const appwrite_storage: string = ENVIRONMENT.VITE_APPWRITE_STORAGE_ID;
}
