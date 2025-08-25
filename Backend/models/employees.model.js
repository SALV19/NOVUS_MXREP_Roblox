const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EmployeesSchema = new Schema({
  id: ObjectId,
  runId: String,
  employeeId: String,
  type: String,
  baseSalary: Number,
})

EmployeesSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

EmployeesSchema.statics.createEmployees = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('Employees', EmployeesSchema, 'Employees');