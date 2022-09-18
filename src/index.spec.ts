import Person from "."

it("should sum", () => {
  const person = new Person()

  expect(person.sayMyName()).toBe("Felipe")
})
