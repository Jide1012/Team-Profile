const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const employee= new Employee('Josh Smith','9876543','Josh.Smith@gmail.com');

    expect(employee.name).toEqual('Josh Smith');
    expect(employee.id).toEqual('9876543');
    expect(employee.email).toEqual('Josh.Smith@gmail.com');

});



test("gets the employee's name", () => {
    const employee = new Employee('Josh Smith','9876543','Josh.Smith@gmail.com');
    expect(employee.getName()).toBe('Josh Smith');
});



test("gets the employee's id", () => {
    const employee = new Employee('Josh Smith','9876543','Josh.Smith@gmail.com');

    expect(employee.getId()).toBe('9876543');
});


test("gets the employee's email", () => {
    const employee = new Employee('Josh Smith','9876543','Josh.Smith@gmail.com');
    expect(employee.getEmail()).toBe('Josh.Smith@gmail.com');
});


test("gets the employee's role", () => {
    const employee = new Employee('Josh Smith','9876543','Josh.Smith@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});