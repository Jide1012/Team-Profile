const Engineer = require('../lib/Employee');
test('Creates an employee object', () => 


{
    const Engineer = new Engineer('Jide Adesanya', '12345678', 'JideAdesanya@gmail.com', 'Jide1');
    expect(Engineer.name).toEqual('Jide Adesanya');
    expect(Engineer.id).toEqual('12345678');
    expect(Engineer.email).toEqual('JideAdesanya@gmail.com');
    expect(engineer.github).toEqual('Jide1');
});


test("gets the engineer's github", () => {
    const employee = new Employee('Jide Adesanya', '12345678', 'JideAdesanya@gmail.com', 'Jide1');
    expect(engineer.getGithub()).toEqual('Jide10');
});

test("gets the engineer's role", () => {
    const employee = new Employee('Jide Adesanya', '12345678', 'JideAdesanya@gmail.com', 'Jide1');
    expect(employee.getRole()).toBe('Engineer');
});