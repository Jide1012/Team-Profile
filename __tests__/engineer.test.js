const Engineer = require('../lib/Engineer');
test('Creates an employee object', () => 


{
    const engineer = new Engineer('Jide Adesanya', '12345678', 'JideAdesanya@gmail.com', 'Jide10');
    expect(engineer.name).toEqual('Jide Adesanya');
    expect(engineer.id).toEqual('12345678');
    expect(engineer.email).toEqual('JideAdesanya@gmail.com');
    expect(engineer.github).toEqual('Jide10');
});


test("gets the engineer's github", () => {
    const engineer = new Engineer('Jide Adesanya', '12345678', 'JideAdesanya@gmail.com', 'Jide10');
    expect(engineer.getGithub()).toEqual('Jide10');
});

test("gets the engineer's role", () => {
    const engineer = new Engineer('Jide Adesanya', '12345678', 'JideAdesanya@gmail.com', 'Jide10');
    expect(engineer.getRole()).toBe('Engineer');
});