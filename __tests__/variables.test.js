import { name, age, isActive, person, numbers } from '../src/variables';

test('name should be Alice', () => {
    expect(name).toBe('Alice')
})

test('age should be 30', () => {
    expect(age).toBe(30)
})

test('age should be a number', () => {
    expect(typeof age).toBe('number')
})

test('isActive should be true', () => {
    expect(isActive).toBe(true)
})

test('isActive should be an boolean', () => {
    expect(typeof isActive).toBe('boolean')
})

test('person should be an object', () => {
    expect(typeof person).toBe('object')
})

test('person should have name Bob and age 25', () => {
    expect(person).toEqual({name: 'Bob', age: 25})
})

test('person should have name Bob', () => {
    expect(person.name).toEqual('Bob')
})

test('person name should be string ', () => {
    expect(typeof person.name).toEqual('string')
})

test('numbers array should contain 1, 2, 3, 4, 5', () => {
    expect(numbers).toEqual([1, 2, 3, 4, 5])
})

test('numbers should be object', () => {
    expect(typeof numbers).toBe('object')
})

test('numbers array should be array', () => {
    expect(Array.isArray(numbers)).toBe(true)
})