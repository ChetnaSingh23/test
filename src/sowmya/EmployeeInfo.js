import React from 'react';

let maindivStyles = {
  border: "1px solid gray",
  fontSize: "18px",
  display: "block"
}

let divStyles = {
  border: "1px solid gray",
  height: "100%",
  padding: "2px 10px"
}

let spanStyles = {
  fontWeight:"700",
  color: "wheat"
}
let var1;
let var2;
var1=100
var2=200
const employees = [
  {
    name: "Adam",
    department: "Software Engineering",
    job_title: "Manager",
    experience: 3
  },
  {
    name: "Bob",
    department: "Software Engineering",
    job_title: "Senior Software Engineer",
    experience: 8
  },
  {
    name: "George",
    department: "Software Engineering",
    job_title: "UI/UX Developer",
    experience: 4
  },
  {
    name: "Steve",
    department: "Software Engineering",
    job_title: "Full stack Developer",
    experience: 2
  },
  {
    name: "Adam",
    department: "Software Engineering",
    job_title: "Manager",
    experience: 3
  },
  {
    name: "Bob",
    department: "Software Engineering",
    job_title: "Senior Software Engineer",
    experience: 8
  },
  {
    name: "George",
    department: "Software Engineering",
    job_title: "UI/UX Developer",
    experience: 4
  },
  {
    name: "Steve",
    department: "Software Engineering",
    job_title: "Full stack Developer",
    experience: 2
  }
];

class EmployeeInfo extends React.Component {

  showDetails(employees) {
    return(
      employees.map((employee, i) => {
        return(
          <tr>
            <td>{employee.name}</td>
            <td>{employee.job_title}</td>
            <td>{employee.department}</td>
            <td>{employee.experience}</td> 
          </tr>);
      })
    );
  }

  render() {
    return(
      <div class="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Department</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {this.showDetails(employees)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EmployeeInfo;