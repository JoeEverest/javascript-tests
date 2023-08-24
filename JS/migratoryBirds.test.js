const migratoryBirds = require("./migratoryBirds");

test("migratoryBirds function exists", () => {
	expect(migratoryBirds).toBeDefined();
});

test("migratoryBirds returns a number", () => {
	expect(typeof migratoryBirds([1, 2, 3])).toBe("number");
});

test("migratoryBirds returns 4 when given [1 ,4 ,4 ,4 ,5, 3]", () => {
	expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
});
