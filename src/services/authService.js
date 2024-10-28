import conf from "../conf/conf";
import { appwriteDB } from "../utills/appwriteConfig.js"
import { ID , Permission, Role, } from 'appwrite';

const AuthService = {
  createUser: async (name, username, email, password, role="student") => {
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
          role,

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
   getCurrentUser: async () =>{
    try {
      // Get the stored user ID from localStorage
      const userId = localStorage.getItem('userId');
      
      if (!userId) {
        return null; // No user is logged in
      }

      // Fetch the user document from your custom user collection
      const user = await appwriteDB.getDocument(conf.appwriteDatabaseId, conf.appwriteUsersCollectionId, userId);

      return user; // Return the user's data if found

    } catch (error) {
      console.error('Error fetching user data:', error);
      return null; // Return null if there's an error or no user found
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
