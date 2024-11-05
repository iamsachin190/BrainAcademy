import conf from "../conf/conf";
import { appwriteDB , account } from "../utills/appwriteConfig.js"
import { ID , Permission, Role, } from 'appwrite';
import Cookies from 'js-cookie';


const AuthService = {

  saveUserIdToCookie: (userId) => {
    if (userId) {
      Cookies.set('userId', userId, { expires: 7, secure: true, sameSite: 'strict' });
    } else {
      console.error('Error saving user ID to cookie: User ID is empty');
    }
  },

  getUserIdFromCookie: () => {
    return Cookies.get('userId');
  },

  clearUserIdCookie: () => {
    Cookies.remove('userId');
  },

  createUser: async (name, email, password, role = "student") => {
    try {
      const user = await account.create('unique()', email, password, name);
      const profile = await appwriteDB.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCollectionId,
        'unique()',
        {
          name,
          email,
          role,
          userId: user.$id,
        }
      );
      return { user, profile };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      // Check if a session already exists
      const sessionList = await account.listSessions();
      if (sessionList.sessions.length > 0) {
        // Log out from the current session before creating a new one
        await account.deleteSession('current');
      }

      // Create a new session after clearing any existing ones
      const session = await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      return { session, user };
      
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  getCurrentUserProfile: async (userId) => {
    try {
      const userProfile = await appwriteDB.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCollectionId,
        [`equal("userId", "${userId}")`]
      );
      return userProfile.documents[0];
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await account.deleteSession('current');
      this.clearUserIdCookie();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  },
};

export default AuthService;
