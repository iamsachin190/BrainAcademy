import conf from "../conf/conf";
import { appwriteDB } from "../utills/appwriteConfig";

const CourseService = {
  // Fetch all free courses
  getAllCourses: async () => {
    try {
      const response = await appwriteDB.listDocuments(
         conf.appwriteDatabaseId,
         conf.appwriteFreeCoursesCollectionId
        );
      return response;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },

  // Fetch a single course by ID
  getCourseById: async (id) => {
    try {
      const response = await appwriteDB.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteFreeCoursesCollectionId,
         id
        );
      return response;
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      throw error;
    }
  },

  // Add a new course
  addCourse: async (courseData) => {
    try {
      const response = await appwriteDB.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteFreeCoursesCollectionId ,
        'unique()', 
        {
            title: courseData.title,
            image: courseData.image,
            teacher: courseData.teacher,
            subject: courseData.subject,
            category:courseData.category,
            duretion:courseData.duration,
            url:courseData.url,
        }
      );
      return response;
    } catch (error) {
      console.error('Error adding course:', error);
      throw error;
    }
  },

  // Update an existing course
  updateCourse: async (id, updatedData) => {
    try {
      const response = await appwriteDB.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteFreeCoursesCollectionId,
         id,
         updatedData
        );
      return response;
    } catch (error) {
      console.error('Error updating course:', error);
      throw error;
    }
  },

  // Delete a course
  deleteCourse: async (id) => {
    try {
      await appwriteDB.deleteDocument(DATABASE_ID, FREECOURSE_COLLECTION_ID, id);
    } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
    }
  },
};

export default CourseService;
