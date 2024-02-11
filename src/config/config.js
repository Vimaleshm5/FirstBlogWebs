const config={
    appwriteUri:String(import.meta.env.VITE_APWRITE_URI),
    projectId:String(import.meta.env.VITE_APWRITE_PROJECT_ID),
    databaseId:String(import.meta.env.VITE_APWRITE_DATABASE_ID),
    collectionId:String(import.meta.env.VITE_APWRITE_COLLECTION_ID),
    buckedId:String(import.meta.env.VITE_APWRITE_BUCKED_ID),
    
}
export default config;