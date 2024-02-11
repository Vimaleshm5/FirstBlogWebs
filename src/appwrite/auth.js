import config from '../config/config.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUri)
            .setProject(config.projectId)

        this.account = new Account(this.client)
    }

    async creteAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {

        try {
            return await this.account.get()
        } catch (error) {
            throw error

        }
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {

            console.log("Logout Error :-", error)
        }
    }
}


const authService = new AuthService()

export default authService