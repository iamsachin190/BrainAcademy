const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteArticleBucketId: String(import.meta.env.VITE_APPWRITE_ARTICLE_BUCKET_ID),
    appwriteUserBucketId: String(import.meta.env.VITE_APPWRITE_USER_BUCKET_ID),
    appwriteChatBucketId: String(import.meta.env.VITE_APPWRITE_CHAT_BUCKET_ID),
    appwriteUsersCollectionId: String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
    appwriteArticleCollectionId: String(import.meta.env.VITE_APPWRITE_ARTICLE_COLLECTION_ID),
    appwriteContactCollectionId: String(import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID),
    appwriteCoursesCollectionId: String(import.meta.env.VITE_APPWRITE_COURSES_COLLECTION_ID),
    appwriteDailyPracticeProblemCollectionId: String(import.meta.env.VITE_APPWRITE_DAILYPRACTICEPROBLEM_COLLECTION_ID),
    appwriteGroupChatCollectionId: String(import.meta.env.VITE_APPWRITE_GROUPCHAT_COLLECTION_ID),
    appwriteGroupMessagesCollectionId: String(import.meta.env.VITE_APPWRITE_GROUPMASSAGES_COLLECTION_ID),
    appwriteImpQuestionsCollectionId: String(import.meta.env.VITE_APPWRITE_IMPQUESTIONS_COLLECTION_ID),
    appwriteLecturesCollectionId: String(import.meta.env.VITE_APPWRITE_LECTURES_COLLECTION_ID),
    appwriteProfileCollectionId: String(import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID),
    appwriteQuestionsCollectionId: String(import.meta.env.VITE_APPWRITE_QUESTIONS_COLLECTION_ID),
    appwriteTestResponseCollectionId: String(import.meta.env.VITE_APPWRITE_TESTRESPONSE_COLLECTION_ID),
    appwriteTestSeriesCollectionId: String(import.meta.env.VITE_APPWRITE_TESTSERIES_COLLECTION_ID),
}

export default conf