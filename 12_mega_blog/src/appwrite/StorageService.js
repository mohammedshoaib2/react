import { Client, Storage, ID } from "appwrite";
import conf from "../src/conf/conf";

class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  //uploadFile

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(
        "AppwriteService :: StorageService :: uploadFile :: Error :",
        error
      );
      return false;
    }
  }
  //deleteFile

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(
        "AppwriteService :: StorageService :: deleteFile :: Error :",
        error
      );
      return false;
    }
  }
  //getFilePreview

  getFilePreview(fileId) {
    try {
      return this.getFilePreview(fileId);
    } catch (error) {
      console.log(
        "AppwriteService :: StorageService :: getFilePreview :: Error :",
        error
      );
      return false;
    }
  }
}

const storageService = new StorageService();
export default storageService;
