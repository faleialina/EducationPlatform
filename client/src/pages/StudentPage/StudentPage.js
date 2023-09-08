import Header from '../../companents/Header/Header';
import Footer from "../../companents/Footer/Footer";
import style from './style.module.css'
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

function StudentPage() {


    const array = [{ img: 'img_1', header: 'JavaScript', text: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.' },
    { img: 'img_2', header: 'Java', text: 'A strongly typed object-oriented programming language. Java applications are typically translated into custom bytecode so they can run on any computer architecture using the Java Virtual Machine.' },
    { img: 'img_2', header: 'PHP', text: 'It is a common, open-source, general-purpose interpreted language (scripting language). PHP was created specifically for web development and its code can be embedded directly into HTML code. The language\'s syntax comes from C, Java and Perl, and is easy to learn.' },
    { img: 'img_2', header: 'TypeScript', text: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript\'s key features, such as type annotations, interfaces, classes, and modules' },
    { img: 'img_2', header: 'Ruby', text: 'The main purpose of Ruby is to create simple and at the same time understandable programs, where it is not the speed of the program that is important, but the short development time, clarity and simplicity of the syntax.' },
    { img: 'img_2', header: 'C#', text: 'Object-oriented programming language. C# belongs to a family of languages with a C-like syntax, of which its syntax is closest to C++ and Java.' },
    { img: 'img_2', header: 'C++', text: 'A compiled, statically typed general-purpose programming language. It is one of the most widely spoken languages in the world. Google Chrome, Mozilla Firefox, Winamp and the Adobe product line were developed using C++.' },
    { img: 'img_2', header: 'C', text: 'A compiled, statically typed, general-purpose programming language. The C language is used for developing low-level applications, as it is considered to be closest to hardware.' },
    { img: 'img_3', header: 'Python', text: 'Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.' }]
   
   const result = array.map(elem => <div>
        <div className={style.wrapper}>
            <div className={style[elem.img]}></div>
            <div className={style.info}>
                <h1 className={style.item}>{elem.header}</h1>
                <p className={style.text}>{elem.text}</p>
            </div>
        </div>
    </div>)



    const [page, setPage] = useState(1);
    const [countPage] = useState(3);


    const lastIndex = page * countPage;
    const firstIndex = lastIndex - countPage;
    const currentIndex = result.slice(firstIndex, lastIndex);



    return (
        <div>
            <Header />


            <div className={style.header}>
                <div className={style.img}></div>
                <h1>Courses</h1>
            </div>

            <div className={style.main}>
                {currentIndex}
            </div>


            <Pagination count={array.length / countPage} page={page} onChange={(_, num) => setPage(num)} className={style.pagination} />


            <Footer />
        </div>
    )
}
export default StudentPage;