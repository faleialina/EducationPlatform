import { getAllCourseDB, getByIdCourseDB, createCourseDB, updateCourseDB, deleteCourseDB } from '../repository/course.repository';
import { iCourse } from '../interfaces/coursesIndex';

async function getAllCourse(): Promise<iCourse[]> {
    const data = await getAllCourseDB();
    if (data.length == 0) throw new Error('БД не заполнена');
    return data;
};

async function getByIdCourse(id: string): Promise<iCourse[]> {
    const data = await getByIdCourseDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
};

async function createCourse(course: string): Promise<iCourse[]> {
    const data = await createCourseDB(course);
    if (data.length == 0) throw new Error('Данные не сохранены');
    return data;
};

async function updateCourse(id: string, course: string): Promise<iCourse[]> {
    const data = await updateCourseDB(id, course);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
};

async function deleteCourse(id: string): Promise<iCourse[]> {
    const data = await deleteCourseDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
};


export { getAllCourse, getByIdCourse, createCourse, updateCourse, deleteCourse };