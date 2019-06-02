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
  }
];

class EmployeeInfo extends React.Component {
  showDetails(employees) {
    return(
      employees.map((employee, i) => {
        return(
        <div key = {i}>
          <div style = {divStyles}><span style={spanStyles}>{i+1}</span></div>
          <div style= {divStyles}>
            <span style={spanStyles}>{employee.name}</span><br />
            {employee.job_title}<br />
            {employee.department}<br />
            {employee.experience} years of experience
          </div>
        </div>);
      })
    );
  }

  render() {
    return(
      <div style={maindivStyles}>
        {this.showDetails(employees)}
      </div>
    )
  }
}

export default EmployeeInfo;