import { getAllCourseDB } from '../repository/course.repository';

async function getAllCourse() {
    const data = await getAllCourseDB();
    return data;
}


export { getAllCourse };