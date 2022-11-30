
const Manager = require('../lib/Manager');


test('creates an Manager object', () => {
    const manager = new Manager('Ramla', 2012, 'ramlaahmed01@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Ramla', 2012, 'ramlaahmed01@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 