let employees = [
    { id: '1', profilePhoto: 'images/dp1.png', firstName: 'Anthony', lastName: 'Morris', jobTitle: 'SharePoint Practice Head', department: 'IT', profileURL: '1.html', location: 'Seattle'},
    { id: '2', profilePhoto: 'images/dp2.png', firstName: 'Helen', lastName: ' Zimmerman', jobTitle: 'Operatons Manager', department: 'IT', profileURL: '2.html', location: 'Seattle' },
    { id: '3', profilePhoto: 'images/dp3.png', firstName: 'Joanthon', lastName: ' Smith', jobTitle: 'Product Manager', department: 'IT', profileURL: '3.html', location: 'Seattle' },
    { id: '4', profilePhoto: 'images/dp4.png', firstName: 'Tami', lastName: ' Hopkins', jobTitle: 'Lead Engineer', department: 'IT', profileURL: '4.html', location: 'Seattle' },
    { id: '5', profilePhoto: 'images/dp5.png', firstName: 'Franklin', lastName: ' Humark', jobTitle: 'Network Engineer', department: 'IT', profileURL: '5.html', location: 'Seattle' },
    { id: '6', profilePhoto: 'images/dp6.png', firstName: 'Angela', lastName: ' Bailey', jobTitle: 'Talent Manager', department: 'HR', profileURL: '6.html', location: 'Seattle' },
    { id: '7', profilePhoto: 'images/dp7.png', firstName: 'Robert', lastName: ' Mitchell', jobTitle: 'Software Engineer', department: 'IT', profileURL: '7.html', location: 'Seattle' },
    { id: '8', profilePhoto: 'images/dp8.png', firstName: 'Olivia', lastName: ' Watson', jobTitle: 'UI Designer', department: 'UX', profileURL: '8.html', location: 'India' },
];

const employeeList = document.getElementById('employeeList');
const editModal = document.getElementById('editEmployeeModal');
const closeEditModalButton = document.getElementById('closeEditModal');
let selectedEmployee;

function displayEmployees(employeeData) {
    employeeList.innerHTML = "";
    employeeData.forEach((employee,index) => {
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employee-card');
        employeeCard.innerHTML = `
           <div class="employee-info">
               <img src="${employee.profilePhoto}">
               <h1>${employee.firstName} ${employee.lastName}</h1>
               <p>${employee.jobTitle}<br>${employee.department} department</p>
               <i class="fas fa-phone-square-alt"> </i><i class="fas fa-envelope"> </i><i class="fas fa-comment"> </i><i class="fas fa-star"> </i><i class="fas fa-heart"></i>        
       `;
        employeeList.append(employeeCard);
        employeeCard.addEventListener('click', function () {
            openEditEmployeeModal(employees[index]);
        });
    });
}


function openEditEmployeeModal(employee) {
    editModal.style.display = 'block';
    selectedEmployeeId = employee.id;
    document.getElementById('editFirstName').value = employee.firstName;
    document.getElementById('editLastName').value = employee.lastName;
    document.getElementById('editJobTitle').value = employee.jobTitle;
    document.getElementById('editDepartment').value = employee.department;
}

document.getElementById('saveEdit').addEventListener('click', function (event) {
    event.preventDefault();
    saveEmployeeEdits();
});

function closeEditEmployeeModal() {
    editModal.style.display = 'none';
}
    
function saveEmployeeEdits(event) {
    let index = employees.findIndex(emp => emp.id == selectedEmployeeId);
    let employee = employees[index]
    employee.firstName = document.getElementById('editFirstName').value;
    employee.lastName = document.getElementById('editLastName').value;
    employee.jobTitle = document.getElementById('editJobTitle').value;
    employee.department = document.getElementById('editDepartment').value;
    closeEditEmployeeModal();
    updateFilterLists()
    displayEmployees(employees);
}

closeEditModalButton.addEventListener('click', closeEditEmployeeModal);

function searchEmployees() {
    const searchOption = document.getElementById('searchOption').value;
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const matchingEmployees = employees.filter(employee =>
        employee[searchOption].toLowerCase().includes(searchTerm)
    );
    displayEmployees(matchingEmployees);
}
document.getElementById('searchInput').addEventListener('input', searchEmployees);
document.getElementById('searchOption').addEventListener('change', searchEmployees);

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; 
    displayEmployees(employees); 
}

function filterEmployeesByAlphabet(alphabet) {
    const matchingEmployees = employees.filter(employee =>
        employee.firstName.toLowerCase().startsWith(alphabet.toLowerCase())
    );

    displayEmployees(matchingEmployees);
}

function createAlphabetButtons() {
    const alphabetButtons = document.getElementById('alphabetButtons');

    for (let letter = 'A'; letter <= 'Z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1)) {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => filterEmployeesByAlphabet(letter));
        alphabetButtons.appendChild(button);
    }
}
document.addEventListener('DOMContentLoaded', createAlphabetButtons);
displayEmployees(employees);
const employeeForm = document.getElementById('modalOverlay');

function openForm() {
    employeeForm.style.display = 'block';
    document.getElementById('employeeForm').reset();
}
function closeModal() {
    employeeForm.style.display = 'none';
    displayEmployees(employees)
}
document.getElementById('submitEmployeeForm').addEventListener('click', function (event) {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const department = document.getElementById('department').value;
    const lettersOnly = /^[A-Za-z]+$/;

    if (!lettersOnly.test(firstName)) {
        document.getElementById('firstNameError').style.display = 'block';
        return;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
    }

    if (!lettersOnly.test(lastName)) {
        document.getElementById('lastNameError').style.display = 'block';
        return;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }
    
    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        department: department,  
    };
    employeeList.innerHTML = '';
    employees.push(newEmployee);
    closeModal();
    event.preventDefault(); 
    displayEmployees(employees); 
});
// Function to filter employees 
function createFilterItems(element, elementCounts, filterCriteria, filterList) {
    for (const key in elementCounts) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key} (${elementCounts[key]})`;
        listItem.addEventListener('click', () => {
            filterAndDisplay(filterCriteria, key);
            document.getElementById('searchInput').value = "";
            
        });
        filterList.appendChild(listItem);
    }
}
function filterAndDisplay(filterCriteria, selectedFilter) {
    const matchingEmployees = employees.filter(employee => employee[filterCriteria] === selectedFilter);
    displayEmployees(matchingEmployees);
}
function updateFilterLists() {
    const departmentList = document.getElementById('departmentList');
    const jobTitleList = document.getElementById('jobTitleList');
    const jobTitleListHidden = document.getElementById('jobTitleListHidden');
    const viewMoreJobTitles = document.getElementById('viewMoreJobTitles');

    const departmentCounts = {};
    const jobTitleCounts = {};
    const locationCounts = {};

    departmentList.innerHTML = "";
    locationList.innerHTML = "";
    jobTitleList.innerHTML = "";

    employees.forEach(employee => {
        const department = employee.department;
        departmentCounts[department] = (departmentCounts[department] || 0) + 1;
        const jobTitle = employee.jobTitle;
        jobTitleCounts[jobTitle] = (jobTitleCounts[jobTitle] || 0) + 1;
        const location = employee.location;
        locationCounts[location] = (locationCounts[location] || 0) + 1;
    });
    

    createFilterItems(departmentList, departmentCounts, 'department', departmentList);
    createFilterItems(locationList, locationCounts, 'location', locationList);

    const jobTitles = Object.keys(jobTitleCounts);
    jobTitles.forEach((jobTitle, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${jobTitle} (${jobTitleCounts[jobTitle]})`;
        listItem.addEventListener('click', () => filterAndDisplay('jobTitle', jobTitle));
        if (index < 3) {
            jobTitleList.appendChild(listItem);
        } else {
            jobTitleListHidden.appendChild(listItem);
        }
    });

    viewMoreJobTitles.addEventListener('click', () => {
        if (jobTitleListHidden.style.display === 'none') {
            jobTitleListHidden.style.display = 'block';
            viewMoreJobTitles.textContent = 'View Less';
        } else {
            jobTitleListHidden.style.display = 'none';
            viewMoreJobTitles.textContent = 'View More';
        }
    });
}

updateFilterLists();





