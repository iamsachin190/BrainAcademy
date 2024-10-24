import conf from "../conf/conf";
import { appwriteDB } from "../utills/appwriteConfig.js"
import { ID , Permission, Role, } from 'appwrite';

const AuthService = {
  createUser: async (name, username, email, password, role) => {
    try {
      // Creating a user document in the database
      const document = await appwriteDB.createDocument(
        conf.appwriteDatabaseId, // Replace with your actual database ID
        conf.appwriteUsersCollectionId, // Replace with your actual collection ID
        ID.unique(), // Unique document ID
        {
          name,
          username,
          email,
          password,
          role
        },
        [
            Permission.read(Role.any()), // Allow anyone to read
            Permission.write(Role.any()), // Allow anyone to write
          ]
      );
      return document;
    } catch (error) {
      console.error('Error creating user document:', error);
      throw error;
    }
  },

  loginUser: async (email, password) => {
    try {
      const session = await account.createEmailSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  forgotPassword: async (email) => {
    try {
      // Send password recovery email via Appwrite
      await account.createRecovery(
        email,
        'https://yourdomain.com/reset-password' // Redirect link where user will reset the password
      );
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default AuthService;
