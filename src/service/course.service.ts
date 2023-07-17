import { getAllCourseDB, getByIdCourseDB, createCourseDB } from '../repository/course.repository';

async function getAllCourse() {
    const data = await getAllCourseDB();
    return data;
};

async function getByIdCourse(id) {
    const data = await getByIdCourseDB(id);
    return data;
};

async function createCourse(course) {
    const data = await getByIdCourseDB(course);
    return data;
};



export { getAllCourse, getByIdCourse, createCourse };