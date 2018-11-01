const Employee = require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = (req, res) => {
    res.json({
        status: 'Employees come here'
    });    
}

employeeCtrl.getEmployee = (req, res) => {
    res.json({
        status: 'Employees come here'
    });    
}

employeeCtrl.editEmployee = (req, res) => {
    res.json({
        status: 'Employees come here'
    });    
}

employeeCtrl.deleteEmployee = (req, res) => {
    res.json({
        status: 'Employees come here'
    });   
}

module.exports = employeeCtrl;