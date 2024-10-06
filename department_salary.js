// Task 1 Create a Department Structure
const company = {

        departments: [
    
         {
    
              departmentName: "Engineering",
    
         employees: [
    
              {
    
               name: "Seth",
    
                    salary: 100000,
    
                  subordinates: [
    
                       {
    
                         name: "Crum",
    
                           salary: 80000,
    
                         subordinates: [
    
                       
                    {
                         name: "Harry",
    
                                   
                         salary: 60000,
    
                               
                         subordinates: []
                             },
    
                     ]
    
                 },
                ]
            },
                {
    
                 name: "David",
    
                salary: 90000,
    
               subordinates: []
    
           }
    
      ]
    
        },
    
     {
    
        departmentName: "Sales",
    
        employees: [
    
             {
    
              name: "Eve",
    
                  salary: 85000,
    
                subordinates: [
    
                     {
    
                             name: "Frank",
    
                        salary: 70000,
    
                          subordinates: []
    
                     }
    
                    ]
    
               },
    
               {
    
                    name: "Grace",
    
                     salary: 95000,
    
                 subordinates: []
    
                   }
    
         ]
    
          }
        ]
};      

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
// Task 3 