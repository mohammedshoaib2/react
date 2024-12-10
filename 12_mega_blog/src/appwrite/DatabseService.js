import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

class DatabaseService {
  client = new Client();
  database;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
  }

  async createPost(slug, { title, content, userId, featuredImage, status }) {
    try {
      return await this.database.createDocument(
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
        "AppwriteError :: DatabaseService :: createPost :: Error : ",
        error
      );
      return false;
    }
  }

  async updatePost(slug, { title, content, userId, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
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
        "AppwriteError :: DatabaseService :: updatePost :: Error : ",
        error
      );

      return false;
    }
  }

  async deletePost({ slug }) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(
        "AppwriteError :: DatabaseService :: deletePost :: Error : ",
        error
      );

      return false;
    }
  }

  async getPost({ slug }) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(
        "AppwriteError :: DatabaseService :: getPost :: Error : ",
        error
      );

      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(
        "AppwriteError :: DatabaseService :: getPost :: Error : ",
        error
      );
      return false;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
//DatabaseService

//createPost()

//updatePost()

//deletePost()

//getPost()

//getPosts()
