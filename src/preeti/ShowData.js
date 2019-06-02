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

class ShowData extends React.Component {
  constructor() {
    super();
    this.state = {
      success:false,
    };
  }

  showSuccess(){
    this.setState({success:!this.state.success})
  }

  showDetails(employees) {
    return(
      employees.map((employee, i) => {
        return(
          <tr key = {i}>
            <td>{employee.name}</td>
            <td>{employee.job_title}</td>
            <td>{employee.department}</td>
            <td>{employee.experience}</td>
            <td><button class="btn btn-danger" onClick={() => this.showSuccess()}>Edit</button></td>
          </tr>);
        })
    );
  }

  render() {
    return(
      <div class="container">
      {this.state.success && 
        <div class="alert alert-success alert-dismissible fade show">
          <button type="button" class="close"  onClick={() => this.showSuccess()} data-dismiss="alert">&times;</button>
          <strong>Success!</strong> This alert box could indicate a successful or positive action.
        </div>}
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Exp</th>
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

export default ShowData;