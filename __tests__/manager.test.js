const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Kayla Rangel', '46946946', 'Krangel@yahoo.com', '98765432');

    expect(manager.name).toEqual('Kayla Rangel');
    expect(manager.id).toEqual('46946946');
    expect(manager.email).toEqual('Krangel@yahoo.com');
    expect(manager.officeNumber).toEqual('98765432');
});

test("gets manager's role", () => {
    const manager = new Manager('Kayla Rangel', '46946946', 'Krangel@yahoo.com', '98765432');

    expect(manager.getRole()).toBe('Manager');
});