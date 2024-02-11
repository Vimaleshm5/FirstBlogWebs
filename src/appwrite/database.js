import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();

    database;
    bucked;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUri)
            .setProject(config.projectId);

        this.database = new Databases(this.client);
        this.bucked = new Storage(this.client);
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            await this.database.createDocument(config.databaseId, config.collectionId, slug, { title, content, userId, featureImage, status })
        } catch (error) {
            throw error
        }

    }
    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.database.updateDocument(config.databaseId, config.collectionId, slug, { title, content, featureImage, status })
        } catch (error) {
            throw error
        }

    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(config.databaseId, config.collectionId, slug)
            return true
        } catch (error) {
            throw error
            return false
        }
    }
    async getPost(slug) {
        try {
            return await this.database.getDocument(config.databaseId, config.collectionId, slug)
        } catch (error) {
            throw error

        }
    }
    async getPosts(queries = [Query.equal("status", "Active")]) {
        try {
            return await this.database.listDocuments(config.databaseId, config.collectionId, queries)
        } catch (error) {
           console.log("You are not active user Please Login")
        }
    }
    async uploadFile(file) {
        try {
            return await this.bucked.createFile(config.buckedId, ID.unique(), file)
        } catch (error) {
            throw error
            return false
        }

    }
    async deleteFile(fileId) {
        try {
            await this.bucked.deleteFile(config.buckedId, fileId)
            return true
        } catch (error) {
            throw error
        }
    }
    getFilePreview(fileId) {
        return this.bucked.getFilePreview(
            config.buckedId,
            fileId
        )
    }
}



const service = new Service()

export default service