const EmployeesSchema = require("../models/employees.model");

function employeesHired(data) {
  console.log("Saved employees")
  EmployeesSchema.createEmployees(data.hiredEmployees);
}

module.exports = {
  employeesHired,
};
