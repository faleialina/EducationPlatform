import { getAllCourseDB, getByIdCourseDB, createCourseDB, updateCourseDB, deleteCourseDB } from '../repository/course.repository';
import { iCourse } from '../interfaces/coursesIndex';

async function getAllCourse(): Promise<iCourse[]> {
    const data = await getAllCourseDB();
    return data;
};

async function getByIdCourse(id: string): Promise<iCourse[]> {
    const data = await getByIdCourseDB(id);
    return data;
};

async function createCourse(course: string): Promise<iCourse[]> {
    const data = await getByIdCourseDB(course);
    return data;
};

async function updateCourse(id: string, course: string): Promise<iCourse[]> {
    const data = await updateCourseDB(id, course);
    return data;
};

async function deleteCourse(id: string): Promise<iCourse[]> {
    const data = await deleteCourseDB(id);
    return data;
};


export { getAllCourse, getByIdCourse, createCourse, updateCourse, deleteCourse };