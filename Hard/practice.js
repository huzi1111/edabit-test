let student = {
    age : 21,
    'blood_group' : 'A+',
    firstname : 'huzi',
    lname : 'liquid',
    getfullname()
    {
        return this.firstname + " " + this.lname;
    }
};
let teacher = {...student};
teacher.lname = 'huzhuz';
console.log(teacher.getfullname());
console.log(student.getfullname());