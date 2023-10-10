// displaying Employee details

let employees = [
    { profilePhoto: 'images/dp1.png',  name: 'Anthony Morris', jobTitle: 'SharePoint Practice Head', department: 'IT', profileURL: '1.html' },
    { profilePhoto: 'images/dp2.png', name: 'Helen Zimmerman', jobTitle: 'Operatons Manager', department: 'IT', profileURL: '2.html' },
    { profilePhoto: 'images/dp3.png', name: 'Joanthon Smith', jobTitle: 'Product Manager', department: 'IT', profileURL: '3.html' },
    { profilePhoto: 'images/dp4.png', name: 'Tami Hopkins', jobTitle: 'Lead Engineer', department: 'IT', profileURL: '4.html' },
    { profilePhoto: 'images/dp5.png', name: 'Franklin Humark', jobTitle: 'Network Engineer', department: 'IT', profileURL: '5.html' },
    { profilePhoto: 'images/dp6.png', name: 'Angela Bailey', jobTitle: 'Talent Manager', department: 'HR', profileURL: '6.html' },
    { profilePhoto: 'images/dp7.png', name: 'Robert Mitchell', jobTitle: 'Software Engineer', department: 'IT', profileURL: '7.html' },
    { profilePhoto: 'images/dp8.png', name: 'Olivia Watson', jobTitle: 'UI Designer', department: 'UX', profileURL: '8.html' },
];


function displayEmployees() {
    const employeeList = document.getElementById('employeeList');

    
    employees.forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employee-card');

        const profileImage = document.createElement('img');
        profileImage.src = employee.profilePhoto;
        

        const nameElement = document.createElement('h1');
        nameElement.textContent = employee.name;

        const jobTitleElement = document.createElement('p');
        jobTitleElement.textContent = employee.jobTitle;

        const departmentElement = document.createElement('p');
        departmentElement.textContent = `${employee.department} Department`;

        const phoneIcon = document.createElement('i');
        phoneIcon.classList.add('fas', 'fa-phone-square-alt');

        const mailIcon = document.createElement('i');
        mailIcon.classList.add('fas', 'fa-envelope');

        const messageIcon = document.createElement('i');
        messageIcon.classList.add('fas', 'fa-comment');

        const importantIcon = document.createElement('i');
        importantIcon.classList.add('fas', 'fa-star');

        const favouriteIcon = document.createElement('i');
        favouriteIcon.classList.add('fas', 'fa-heart');

         

        employeeCard.appendChild(profileImage);
        employeeCard.appendChild(nameElement);
        employeeCard.appendChild(jobTitleElement);
        employeeCard.appendChild(departmentElement);
        employeeCard.appendChild(phoneIcon);
        employeeCard.appendChild(mailIcon);
        employeeCard.appendChild(messageIcon);
        employeeCard.appendChild(importantIcon);
        employeeCard.appendChild(favouriteIcon);

        employeeList.appendChild(employeeCard);
    });
}


displayEmployees();


//Employee form

function AddEmployee() {

   
    const employeeForm = document.getElementById('employeeForm');
    employeeForm.style.display = 'block';

}

// adding new employee to saved employees list
function addEmployee(newEmployee) {
    employees.push(newEmployee);
   
}

document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const department = document.getElementById('department').value;


    const newEmployee = {
        name: name,
        jobTitle: jobTitle,
        department: department
        
    };

    employeeList.innerHTML = '';
    
    addEmployee(newEmployee);
   
    displayEmployees(); 

    document.getElementById('employeeForm').reset();

});


//searching employees

function searchEmployees() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');

   
    searchResults.innerHTML = '';

   
    const filteredEmployees = employees.filter(employee => {
        const name = employee.name.toLowerCase();
        const jobTitle = employee.jobTitle.toLowerCase();
        const department = employee.department.toLowerCase();

        return name.includes(searchInput) || jobTitle.includes(searchInput) || department.includes(searchInput);
    });

    
    filteredEmployees.forEach(employee => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = employee.profileUrl;
        link.textContent = `${employee.name}, ${employee.jobTitle}, ${employee.department}`;
        listItem.appendChild(link);
        searchResults.appendChild(listItem);
    });

}


document.getElementById('searchInput').addEventListener('input', searchEmployees);



