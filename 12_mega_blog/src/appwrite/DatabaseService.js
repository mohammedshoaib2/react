import { Client, Databases, Query } from "appwrite";
import conf from "../src/conf/conf";

class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  //createPost

  async createPost(slug, { title, content, userId, featuredImage, status }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          userId,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(
        "AppwriteService :: DatabaseService :: createPost :: Error : ",
        error
      );

      return false;
    }
  }

  //updatePost

  async updatePost(slug, { title, content, userId, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, userId, featuredImage, status }
      );
    } catch (error) {
      console.log(
        "AppwriteService :: DatabaseService :: updatePost :: Error : ",
        error
      );
      return false;
    }
  }

  //deletePost

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(
        "AppwriteService :: DatabaseService :: deletePost :: Error : ",
        error
      );
      return false;
    }
  }

  //getPost

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(
        "AppwriteService :: DatabaseService :: getPost :: Error : ",
        error
      );
      return false;
    }
  }

  //getPosts

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(
        "AppwriteService :: DatabaseService :: getPost :: Error : ",
        error
      );
      return false;
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
