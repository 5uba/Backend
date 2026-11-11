
let students = [];

export const createStudent = (data) => {
    const student = {
        id: Date.now(),
        ...data
    };

    students.push(student);
    return student;
};

export const getAllStudents = () => {
    return students;
};

export const updateStudent = (id, data) => {
    const index = students.findIndex(
        (student) => student.id == id
    );

    if (index === -1) return null;

    students[index] = {
        ...students[index],
        ...data,
        id: students[index].id
    };

    return students[index];
};

export const deleteStudent = (id) => {
    const index = students.findIndex(
        (student) => student.id == id
    );

    if (index === -1) return null;

    return students.splice(index, 1);
};
