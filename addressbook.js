// displaying Employee details

let employees = [
    { profilePhoto: 'images/dp1.png',name:'Anthony Morris', firstName: 'Anthony',lastName: 'Morris', jobTitle: 'SharePoint Practice Head', department: 'IT', profileURL: '1.html', location:'Seattle' },
    { profilePhoto: 'images/dp2.png',name:'Helen Zimmerman', firstName: 'Helen', lastName: ' Zimmerman', jobTitle: 'Operatons Manager', department: 'IT', profileURL: '2.html', location: 'Seattle' },
    { profilePhoto: 'images/dp3.png', name: 'Joanthon Smith', firstName: 'Joanthon', lastName: ' Smith', jobTitle: 'Product Manager', department: 'IT', profileURL: '3.html', location: 'Seattle' },
    { profilePhoto: 'images/dp4.png', name: 'Tami Hopkins', firstName: 'Tami', lastName: ' Hopkins', jobTitle: 'Lead Engineer', department: 'IT', profileURL: '4.html', location: 'Seattle' },
    { profilePhoto: 'images/dp5.png', name: 'Franklin Humark', firstName: 'Franklin', lastName: ' Humark', jobTitle: 'Network Engineer', department: 'IT', profileURL: '5.html', location: 'Seattle' },
    { profilePhoto: 'images/dp6.png', name: 'Angela Bailey', firstName: 'Angela', lastName: ' Bailey', jobTitle: 'Talent Manager', department: 'HR', profileURL: '6.html', location: 'Seattle' },
    { profilePhoto: 'images/dp7.png', name: 'Robert Mitchell', firstName: 'Robert', lastName: ' Mitchell', jobTitle: 'Software Engineer', department: 'IT', profileURL: '7.html', location: 'Seattle' },
    { profilePhoto: 'images/dp8.png', name: 'Olivia Watson', firstName: 'Olivia', lastName: ' Watson', jobTitle: 'UI Designer', department: 'UX', profileURL: '8.html', location: 'India' },
];


function displayEmployees(employeeData) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = "";

    employeeData.forEach(employee => {
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
// searching employees function
//function searchEmployees() {
//    const searchInput = document.getElementById('searchInput');
//    const searchTerm = searchInput.value.toLowerCase();

//    const filteredEmployees = employees.filter(employee =>
//        employee.name.toLowerCase().includes(searchTerm) ||
//        employee.jobTitle.toLowerCase().includes(searchTerm) ||
//        employee.department.toLowerCase().includes(searchTerm)
//    );

//    displayEmployees(filteredEmployees);
//}

// searching employees function
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

// Clearing searchbox
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; 
    displayEmployees(employees); 
}


function employeesByNameA() {
    const employeesStartingWithA = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('a')
    );

    displayEmployees(employeesStartingWithA);
}

function employeesByNameB() {
    const employeesStartingWithB = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('b')
    );

    displayEmployees(employeesStartingWithB);
}

function employeesByNameC() {
    const employeesStartingWithC = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('c')
    );

    displayEmployees(employeesStartingWithC);
}
function employeesByNameD() {
    const employeesStartingWithD = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('d')
    );

    displayEmployees(employeesStartingWithD);
}
function employeesByNameE() {
    const employeesStartingWithE = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('e')
    );

    displayEmployees(employeesStartingWithE);
}
function employeesByNameF() {
    const employeesStartingWithF = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('f')
    );

    displayEmployees(employeesStartingWithF);
}
function employeesByNameG() {
    const employeesStartingWithG = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('g')
    );

    displayEmployees(employeesStartingWithG);
}
function employeesByNameH() {
    const employeesStartingWithH = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('h')
    );

    displayEmployees(employeesStartingWithH);
}
function employeesByNameI() {
    const employeesStartingWithI = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('i')
    );

    displayEmployees(employeesStartingWithI);
}
function employeesByNameJ() {
    const employeesStartingWithJ = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('j')
    );

    displayEmployees(employeesStartingWithJ);
}
function employeesByNameK() {
    const employeesStartingWithK = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('k')
    );

    displayEmployees(employeesStartingWithK);
}
function employeesByNameL() {
    const employeesStartingWithL = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('l')
    );

    displayEmployees(employeesStartingWithL);
}
function employeesByNameM() {
    const employeesStartingWithM = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('m')
    );

    displayEmployees(employeesStartingWithM);
}
function employeesByNameN() {
    const employeesStartingWithN = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('n')
    );

    displayEmployees(employeesStartingWithN);
}
function employeesByNameO() {
    const employeesStartingWithO = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('o')
    );

    displayEmployees(employeesStartingWithO);
}
function employeesByNameP() {
    const employeesStartingWithP = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('p')
    );

    displayEmployees(employeesStartingWithP);
}
function employeesByNameQ() {
    const employeesStartingWithQ = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('q')
    );

    displayEmployees(employeesStartingWithQ);
}
function employeesByNameR() {
    const employeesStartingWithR = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('r')
    );

    displayEmployees(employeesStartingWithR);
}
function employeesByNameS() {
    const employeesStartingWithS = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('s')
    );

    displayEmployees(employeesStartingWithS);
}
function employeesByNameT() {
    const employeesStartingWithT = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('t')
    );

    displayEmployees(employeesStartingWithT);
}
function employeesByNameU() {
    const employeesStartingWithU = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('u')
    );

    displayEmployees(employeesStartingWithU);
}
function employeesByNameV() {
    const employeesStartingWithV = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('v')
    );

    displayEmployees(employeesStartingWithV);
}
function employeesByNameW() {
    const employeesStartingWithW = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('w')
    );

    displayEmployees(employeesStartingWithW);
}
function employeesByNameX() {
    const employeesStartingWithX = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('x')
    );

    displayEmployees(employeesStartingWithX);
}
function employeesByNameY() {
    const employeesStartingWithY = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('y')
    );

    displayEmployees(employeesStartingWithY);
}
function employeesByNameZ() {
    const employeesStartingWithZ = employees.filter(employee =>
        employee.name.toLowerCase().startsWith('z')
    );

    displayEmployees(employeesStartingWithZ);
}



displayEmployees(employees);


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchEmployees);

const nameAButton = document.getElementById('nameA');
nameAButton.addEventListener('click', employeesByNameA);

const nameBButton = document.getElementById('nameB');
nameBButton.addEventListener('click', employeesByNameB);

const nameCButton = document.getElementById('nameC');
nameCButton.addEventListener('click', employeesByNameC);

const nameDButton = document.getElementById('nameD');
nameDButton.addEventListener('click', employeesByNameD);

const nameEButton = document.getElementById('nameE');
nameEButton.addEventListener('click', employeesByNameE);

const nameFButton = document.getElementById('nameF');
nameFButton.addEventListener('click', employeesByNameF);

const nameGButton = document.getElementById('nameG');
nameGButton.addEventListener('click', employeesByNameG);

const nameHButton = document.getElementById('nameH');
nameHButton.addEventListener('click', employeesByNameH);

const nameIButton = document.getElementById('nameI');
nameIButton.addEventListener('click', employeesByNameI);

const nameJButton = document.getElementById('nameJ');
nameJButton.addEventListener('click', employeesByNameJ);

const nameKButton = document.getElementById('nameK');
nameKButton.addEventListener('click', employeesByNameK);

const nameLButton = document.getElementById('nameL');
nameLButton.addEventListener('click', employeesByNameL);

const nameMButton = document.getElementById('nameM');
nameMButton.addEventListener('click', employeesByNameM);

const nameNButton = document.getElementById('nameN');
nameNButton.addEventListener('click', employeesByNameN);

const nameOButton = document.getElementById('nameO');
nameOButton.addEventListener('click', employeesByNameO);

const namePButton = document.getElementById('nameP');
namePButton.addEventListener('click', employeesByNameP);

const nameQButton = document.getElementById('nameQ');
nameQButton.addEventListener('click', employeesByNameQ);

const nameRButton = document.getElementById('nameR');
nameRButton.addEventListener('click', employeesByNameR);

const nameSButton = document.getElementById('nameS');
nameSButton.addEventListener('click', employeesByNameS);

const nameTButton = document.getElementById('nameT');
nameTButton.addEventListener('click', employeesByNameT);

const nameUButton = document.getElementById('nameU');
nameUButton.addEventListener('click', employeesByNameU);

const nameVButton = document.getElementById('nameV');
nameVButton.addEventListener('click', employeesByNameV);

const nameWButton = document.getElementById('nameW');
nameWButton.addEventListener('click', employeesByNameW);

const nameXButton = document.getElementById('nameX');
nameXButton.addEventListener('click', employeesByNameX);

const nameYButton = document.getElementById('nameY');
nameYButton.addEventListener('click', employeesByNameY);

const nameZButton = document.getElementById('nameZ');
nameZButton.addEventListener('click', employeesByNameZ);


//Employee form

const employeeForm = document.getElementById('modalOverlay');
function AddEmployee() {

    
    employeeForm.style.display = 'block';

}
function closeModal() {
    employeeForm.style.display = 'none';
    displayEmployees(employees)
}






// adding new employee to saved employees list
function addEmployee(newEmployee) {
    employees.push(newEmployee);
   
}

document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const department = document.getElementById('department').value;


    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        name: name,
        jobTitle: jobTitle,
        department: department
        
    };

    employeeList.innerHTML = '';
    
    addEmployee(newEmployee);
   
    displayEmployees(); 

    document.getElementById('employeeForm').reset();

});
// Function to filter employees by department
function filterEmployeesByDepartment(selectedDepartment) {
    const employeesInDepartment = employees.filter(employee =>
        employee.department === selectedDepartment
    );

    displayEmployees(employeesInDepartment);
}

// Function to filter employees by job title
function filterEmployeesByJobTitle(selectedJobTitle) {
    const employeesWithJobTitle = employees.filter(employee =>
        employee.jobTitle === selectedJobTitle
    );

    displayEmployees(employeesWithJobTitle);
}

// Function to filter employees by location
function filterEmployeesByLocation(selectedLocation) {
    const employeesAtLocation = employees.filter(employee =>
        employee.location === selectedLocation
    );

    displayEmployees(employeesAtLocation);
}

// Function to update the lists (departments, job titles, and locations) with counts
function updateFilterLists() {
   const departmentList = document.getElementById('departmentList');
   const jobTitleList = document.getElementById('jobTitleList');
   const jobTitleListHidden = document.getElementById('jobTitleListHidden');
   const viewMoreJobTitles = document.getElementById('viewMoreJobTitles');

   const departmentCounts = {};
   const jobTitleCounts = {};
   const locationCounts = {};

   employees.forEach(employee => {
       
       const department = employee.department;
       departmentCounts[department] = (departmentCounts[department] || 0) + 1;

       
       const jobTitle = employee.jobTitle;
       jobTitleCounts[jobTitle] = (jobTitleCounts[jobTitle] || 0) + 1;

       
       const location = employee.location;
       locationCounts[location] = (locationCounts[location] || 0) + 1;
   });

   
   departmentList.innerHTML = '';
   jobTitleList.innerHTML = '';
   jobTitleListHidden.innerHTML = '';

   // Creating list items for each department with counts
   for (const department in departmentCounts) {
       const listItem = document.createElement('li');
       listItem.textContent = `${department} (${departmentCounts[department]})`;
       listItem.addEventListener('click', () => filterEmployeesByDepartment(department));
       departmentList.appendChild(listItem);
    }
    for (const location in locationCounts) {
        const listItem = document.createElement('li');
        listItem.textContent = `${location} (${locationCounts[location]})`;
        listItem.addEventListener('click', () => filterEmployeesByLocation(location));
        locationList.appendChild(listItem);
    }

   // showing 3 filters
   const jobTitles = Object.keys(jobTitleCounts);
   jobTitles.slice(0, 3).forEach(jobTitle => {
       const listItem = document.createElement('li');
       listItem.textContent = jobTitle;
       listItem.addEventListener('click', () => filterEmployeesByJobTitle(jobTitle));
       jobTitleList.appendChild(listItem);
   });

   // hiding the filters
   jobTitles.slice(3).forEach(jobTitle => {
       const listItem = document.createElement('li');
       listItem.textContent = jobTitle;
       listItem.addEventListener('click', () => filterEmployeesByJobTitle(jobTitle));
       jobTitleListHidden.appendChild(listItem);
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


//function toggleJobTitleFilters() {
//    const jobTitleList = document.getElementById('jobTitleList');

//    // Check if job titles are currently hidden
//    if (jobTitleList.classList.contains('hidden')) {
//        jobTitleList.classList.remove('hidden');
//    } else {
//        jobTitleList.classList.add('hidden');
//    }
//}
//const jobTitleList = document.getElementById('jobTitleList');
//jobTitleList.classList.add('hidden');
//const viewMoreJobTitlesButton = document.getElementById('viewMoreJobTitles');
//viewMoreJobTitlesButton.addEventListener('click', toggleJobTitleFilters);

//    for (const department in departmentCounts) {
//        const listItem = document.createElement('li');
//        const departmentLink = document.createElement('a');
//        departmentLink.href = 'javascript:void(0)';
//        departmentLink.textContent = `${department} (${departmentCounts[department]})`;
//        departmentLink.addEventListener('click', function () {
//            displayEmployeesByCategory('department', department);
//        });
//        listItem.appendChild(departmentLink);
//        departmentList.appendChild(listItem);
//    }

//    for (const jobTitle in jobTitleCounts) {
//        const listItem = document.createElement('li');
//        const jobTitleLink = document.createElement('a');
//        jobTitleLink.href = 'javascript:void(0)';
//        jobTitleLink.textContent = `${jobTitle}: ${jobTitleCounts[jobTitle]} employees`;
//        jobTitleLink.addEventListener('click', function () {
//            displayEmployeesByCategory('jobTitle', jobTitle);
//        });
//        listItem.appendChild(jobTitleLink);
//        jobTitleList.appendChild(listItem);
//    }

//}
//function filterEmployeesByDepartment(department) {
//    const employeesInDepartment = employees.filter(employee =>
//        employee.department === department
//    );

//    displayEmployees(employeesInDepartment);
//}
//function employeesByNameZ() {
//    const employeesStartingWithZ = employees.filter(employee =>
//        employee.name.toLowerCase().startsWith('z')
//    );

//    displayEmployees(employeesStartingWithZ);
//}


//displayCounts();


//function calculateDepartmentCounts(employees) {
//    // Create an object to store department counts
//    const departmentCounts = {};

//    // Calculate department counts
//    employees.forEach(employee => {
//        const department = employee.department;
//        departmentCounts[department] = (departmentCounts[department] || 0) + 1;
//    });

//    // Update the <span> elements with the counts
//    for (const department in departmentCounts) {
//        if (departmentCounts.hasOwnProperty(department)) {
//            const count = departmentCounts[department];
//            const countElement = document.getElementById(`department${department.replace(/ /g, "")}Count`);
//            if (countElement) {
//                countElement.textContent = count;
//            }
//        }
//    }
//}

//// Call the calculateDepartmentCounts function to update department counts
//calculateDepartmentCounts(employees);


//searching employees

//function searchEmployees() {
//    const searchInput = document.getElementById('searchInput').value.toLowerCase();
//    const searchResults = document.getElementById('searchResults');


//    searchResults.innerHTML = '';


//    const filteredEmployees = employees.filter(employee => {
//        const name = employee.name.toLowerCase();
//        const jobTitle = employee.jobTitle.toLowerCase();
//        const department = employee.department.toLowerCase();

//        return name.includes(searchInput) || jobTitle.includes(searchInput) || department.includes(searchInput);
//    });


//    filteredEmployees.forEach(employee => {
//        const listItem = document.createElement('li');
//        const link = document.createElement('a');

//        link.href = employee.profileUrl;
//        link.textContent = `${employee.name}, ${employee.jobTitle}, ${employee.department}`;
//        listItem.appendChild(link);
//        searchResults.appendChild(listItem);

           
//    });

//}


//document.getElementById('searchInput').addEventListener('input', searchEmployees);



