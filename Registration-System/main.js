class Student {
    constructor(firstName, lastName, idNumber, classRoom) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.classRoom = classRoom;
    }
}

class Command {

    registerNewStudent(student) {
        const allStudent = document.getElementById("all-students");
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.idNumber}</td>
          <td>${student.classRoom}</td>
          <td> <a href="#" class="remove-student">🗑</a></td>
        `;
        allStudent.appendChild(row);
    }
    clearAllInputs() {
        document.getElementById("firstname").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("idNumber").value = '';
        document.getElementById("classRoom").value = '';
    }

    displayAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('student-form');

        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000)
    }

    deleteStudent(element) {
        if (element.className === 'remove-student') {
            element.parentElement.parentElement.remove();
        }
    }
}


const handleFormSubmit = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const lasstName = document.getElementById("lastName").value;
    const idNumber = document.getElementById("idNumber").value;
    const classRoom = document.getElementById("classRoom").value;
    
    const student = new Student(firstName, lasstName, idNumber, classRoom);
    
    //register new student
    const command = new Command();
    if (firstName === "" || lasstName === "" || idNumber === "") {
        command.displayAlert("Please fill all inputs", "alert-warning")
    } 
    else {
        command.displayAlert('New student addet to list ', "alert-success")
        command.registerNewStudent(student);
        command.clearAllInputs();
    }
    
};

// eventListener
document.getElementById("student-form").addEventListener('submit', handleFormSubmit);
document.getElementById("all-students").addEventListener("click", function (e) {
    
    const command = new Command();

    command.deleteStudent(e.target)

    command.displayAlert('Student deleted successfully', "alert-success");
    e.preventDefault();
});