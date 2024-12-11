import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        await this.login({ email, password });
        return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(
        "AppwriteError :: AuthService :: createAccount :: Error : ",
        error
      );
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("AppwriteError :: AuthService :: login :: Error : ", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(
        "AppwriteError :: AuthService :: getCurrentUser :: Error : ",
        error
      );
      return false;
    }
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.log("AppwriteError :: AuthService :: logOut :: Error : ", error);
      return false;
    }
  }
}

const authService = new AuthService();
export default authService;
//AuthService
// createAccount()

//login()

//getCurrentUser()

//logOut()
