import { Client, ID, Storage } from "appwrite";
import config from "../config/config.js";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appWriteEndPoint)
      .setProject(config.appWriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFileView(fileId) {
    return this.storage.getFileView(config.appWriteBucketId, fileId);
  }
}

const storageService = new StorageService();
export default storageService;
