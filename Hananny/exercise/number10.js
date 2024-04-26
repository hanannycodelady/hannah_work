const student = {
    name: "John Doe",
    age: 22,
    rollno: 123
  };
  
  console.log("Before deleting rollno property:");
  console.log(student);
  
  delete student.rollno;
  
  console.log("After deleting rollno property:");
  console.log(student);