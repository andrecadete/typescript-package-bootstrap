import { Greeter } from '../../src/Greeter/Greeter';

const greeter = new Greeter();

test('It greets the target only', () => {
    const target = 'World';
    const result = greeter.greet(target);
    expect(result).toBe('Hello World');
    expect(result).not.toBe('Hello John');
});
