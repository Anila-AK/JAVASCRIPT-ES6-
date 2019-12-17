// parent child relationship

//school.. empy...some teachers, admin, other staff
//all school emp
//teachers ... teach
//admin.. management

class SchoolEmpolyee {
  constructor(id, name, income) {
    this.id = id;
    this.name = name;
    this.income = income;
  }
  getInscurance() {
    console.log("Employee insturance");
  }
}

class Teacher extends SchoolEmpolyee {
  constructor(dept, subject) {
    //   to call constcror of parent we use super() and it should be first attarbute
    //    of child class's constrctor
    super();
    this.dept = dept;8
    this.subject = subject;
  }
}

class AdminEmployee extends SchoolEmpolyee {
  constructor(role, dept) {
    super();
    this.dept = dept;
    this.role = role;
  }
}
