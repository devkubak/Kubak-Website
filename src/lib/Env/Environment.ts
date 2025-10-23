/* eslint-disable @typescript-eslint/no-explicit-any */
let PROCESS: any;

const ENVIRONMENT = PROCESS?.env ? PROCESS.env : import.meta.env;

// Appwrite Config
const appwrite_endpoint: string = ENVIRONMENT.VITE_APPWRITE_ENDPOINT;
const appwrite_project: string = ENVIRONMENT.VITE_APPWRITE_PROJECT;

// Appwrite Database
const appwrite_database: string = ENVIRONMENT.VITE_APPWRITE_DATABASE_ID;

// Appwrite Collections
const appwrite_collection_carousel: string = ENVIRONMENT.VITE_APPWRITE_CAROUSEL_ID;
const appwrite_collection_carousel_languages: string = ENVIRONMENT.VITE_APPWRITE_CAROUSEL_LANGUAGES_ID;
const appwrite_collection_development_process: string = ENVIRONMENT.VITE_APPWRITE_DEVELOPMENT_PROCESS_ID;
const appwrite_collection_development_process_languages: string = ENVIRONMENT.VITE_APPWRITE_DEVELOPMENT_PROCESS_LANGUAGES_ID;
const appwrite_collection_our_projects: string = ENVIRONMENT.VITE_APPWRITE_OUR_PROJECTS_ID;
const appwrite_collection_technologies: string = ENVIRONMENT.VITE_APPWRITE_TECHNOLOGIES_ID;
const appwrite_collection_technologies_languages: string = ENVIRONMENT.VITE_APPWRITE_TECHNOLOGIES_LANGUAGES_ID;
const appwrite_collection_technology_attribute: string = ENVIRONMENT.VITE_APPWRITE_TECHNOLOGIES_ATTRIBUTE_ID;
const appwrite_collection_footer: string = ENVIRONMENT.VITE_APPWRITE_FOOTER_ID;
const appwrite_collection_footer_languages: string = ENVIRONMENT.VITE_APPWRITE_FOOTER_LANGUAGES_ID;
const appwrite_collection_products: string = ENVIRONMENT.VITE_APPWRITE_PRODUCTS_ID;
const appwrite_collection_products_languages: string = ENVIRONMENT.VITE_APPWRITE_PRODUCTS_LANGUAGES_ID;
const appwrite_collection_product_attributes: string = ENVIRONMENT.VITE_APPWRITE_PRODUCT_ATTRIBUTES_ID;
const appwrite_collection_product_attributes_languages: string = ENVIRONMENT.VITE_APPWRITE_PRODUCT_ATTRIBUTES_LANGUAGES_ID;
const appwrite_collection_about_us: string = ENVIRONMENT.VITE_APPWRITE_ABOUT_US_ID;
const appwrite_collection_about_us_languages: string = ENVIRONMENT.VITE_APPWRITE_ABOUT_US_LANGUAGES_ID;
const appwrite_collection_languages: string = ENVIRONMENT.VITE_APPWRITE_LANGUAGES_ID;
const appwrite_collection_privacies: string = ENVIRONMENT.VITE_APPWRITE_PRIVACIES_ID;
const appwrite_collection_privacyInformations: string = ENVIRONMENT.VITE_APPWRITE_PRIVACY_INFORMATIONS_ID;

// Appwrite Storage
const appwrite_storage: string = ENVIRONMENT.VITE_APPWRITE_STORAGE_ID;

export const Environment = {
  appwrite_endpoint,
  appwrite_project,
  appwrite_database,
  appwrite_collection_carousel,
  appwrite_collection_carousel_languages,
  appwrite_collection_development_process,
  appwrite_collection_development_process_languages,
  appwrite_collection_our_projects,
  appwrite_collection_technologies,
  appwrite_collection_technologies_languages,
  appwrite_collection_technology_attribute,
  appwrite_collection_footer,
  appwrite_collection_footer_languages,
  appwrite_collection_products,
  appwrite_collection_products_languages,
  appwrite_collection_product_attributes,
  appwrite_collection_product_attributes_languages,
  appwrite_collection_about_us,
  appwrite_collection_about_us_languages,
  appwrite_collection_languages,
  appwrite_collection_privacies,
  appwrite_collection_privacyInformations,
  appwrite_storage,
};
