import { Client, Query, TablesDB } from "appwrite";
import config from "../config/config.js";

export class PostService {
  client = new Client();
  tablesDB;

  constructor() {
    this.client
      .setEndpoint(config.appWriteEndPoint)
      .setProject(config.appWriteProjectId);
    this.tablesDB = new TablesDB(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablesDB.createRow(
        config.appWriteDatabaseId,
        config.appWriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.tablesDB.updateRow(
        config.appWriteDatabaseId,
        config.appWriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.tablesDB.deleteRow(
        config.appWriteDatabaseId,
        config.appWriteTableId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.tablesDB.getRow(
        config.appWriteDatabaseId,
        config.appWriteTableId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.tablesDB.listRows(
        config.appWriteDatabaseId,
        config.appWriteTableId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }
}

const postService = new PostService();
export default postService;
