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
function searchEmployees() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.jobTitle.toLowerCase().includes(searchTerm) ||
        employee.department.toLowerCase().includes(searchTerm)
    );

    displayEmployees(filteredEmployees);
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

function displayCounts() {
    const departmentList = document.getElementById('departmentList');
    const jobTitleList = document.getElementById('jobTitleList');

    const departmentCounts = {};
    const jobTitleCounts = {};

    employees.forEach(employee => {
        
        if (!departmentCounts[employee.department]) {
            departmentCounts[employee.department] = 1;
        } else {
            departmentCounts[employee.department]++;
        }

        if (!jobTitleCounts[employee.jobTitle]) {
            jobTitleCounts[employee.jobTitle] = 1;
        } else {
            jobTitleCounts[employee.jobTitle]++;
        }
    });

    departmentList.innerHTML = '';
    jobTitleList.innerHTML = '';

    for (const department in departmentCounts) {
        const listItem = document.createElement('li');
        listItem.textContent = `${department} (${departmentCounts[department]})`;
        departmentList.appendChild(listItem);
    }

    for (const jobTitle in jobTitleCounts) {
        const listItem = document.createElement('li');
        listItem.textContent = `${jobTitle} (${jobTitleCounts[jobTitle]})`;
        jobTitleList.appendChild(listItem);
    }
}


displayCounts();

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



