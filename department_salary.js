// Task 1 Create a Department Structure
const company = {
    departments: [
        {
            departmentName: "Engineering",
            employees: [
                {
                    name: "Johnson",
                    salary: 90000,
                    subordinates: [
                        {
                            name: "Smith",
                            salary: 60000,
                            subordinates: []
                        },
                        {
                            name: "Brown",
                            salary: 65000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "William",
                    salary: 95000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: "Business",
            employees: [
                {
                    name: "Davis",
                    salary: 80000,
                    subordinates: []
                },
                {
                    name: "Wilson",
                    salary: 85000,
                    subordinates: [
                        {
                            name: "Grace",
                            salary: 50000,
                            subordinates: []
                        }
                    ]
                }
            ]
        },
    ]
}
console.log(company)
// Task 2 Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalDepartmentSalary = 0
 // Recursively calculate the sales for each subordinate
 for (let employee of department.employees) { 
totalDepartmentSalary += employee.salary;
    }

      return totalDepartmentSalary;
}
const totalEngineeringSalary = calculateDepartmentSalary(company.departments[0]);
console.log(totalEngineeringSalary);

// Task 3 Calculate total salary for all departments in the company
function calculateCompanySalary(company) {
    let totalCompanySalary = 0

    // This is to iterate over each department and calculate its total salary
    for (const department of company.departments) {
        totalCompanySalary += calculateDepartmentSalary(department);
    }
    return totalCompanySalary;
}
const totalSalary = calculateCompanySalary(company);
console.log(`Total Salary for the company: $${totalSalary}`);