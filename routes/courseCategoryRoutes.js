const { postCourseCategory, getAllCourseCategories, getCourseCategory, deleteCourseCategory } = require('../controllers/CourseCategoryController');
const { authMiddleware, isTeacher } = require('../middlewares/authMiddleware');

const courseCategoryRouter = require('express').Router();

courseCategoryRouter.get('/getall',authMiddleware,getAllCourseCategories);
courseCategoryRouter.post('/createcategory',authMiddleware,isTeacher,postCourseCategory);
courseCategoryRouter.get('/get/:slug',authMiddleware,getCourseCategory);
courseCategoryRouter.delete('/delete/:id',authMiddleware,isTeacher,deleteCourseCategory);
// courseCategoryRouter.post('/createcategory',postCourseCategory);
// courseCategoryRouter.get('/getall',getAllCourseCategories);
// courseCategoryRouter.get('/get/:slug',getCourseCategory);
// courseCategoryRouter.delete('/delete/:id',deleteCourseCategory);

module.exports = courseCategoryRouter;