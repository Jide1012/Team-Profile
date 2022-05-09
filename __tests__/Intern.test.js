const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Max Johnson', '45678910', 'maxj@yahoo.com', 'Dallas Baptist University');

    expect(intern.name).toEqual('Max Johnson');
    expect(intern.id).toEqual('45678910');
    expect(intern.email).toEqual('maxj@yahoo.com');
    expect(intern.school).toEqual('Dallas Baptist University');
});

test("gets Intern's school", () => {
    const intern = new Intern('Max Johnson', '45678910', 'maxj@yahoo.com', 'Dallas Baptist University');

    expect(intern.getSchool()).toEqual('Dallas Baptist University');
});

test("gets Intern's role", () => {
    const intern = new Intern('Max Johnson', '45678910', 'maxj@yahoo.com', 'Dallas Baptist University');

    expect(intern.getRole()).toEqual('Intern');
});