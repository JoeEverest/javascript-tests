const compareTriplets = require("./compareTriplets");

test("compareTriplets function exists", () => {
	expect(compareTriplets).toBeDefined();
});

test("compareTriplets returns an array", () => {
	expect(Array.isArray(compareTriplets([1, 2, 3], [1, 2, 3]))).toBe(true);
});

test("compareTriplets returns [1, 1] when given [1, 2, 3] and [3, 2, 1]", () => {
	expect(compareTriplets([1, 2, 3], [3, 2, 1])).toEqual([1, 1]);
});

// alice [5, 6, 7]
// bob [3, 6, 10]

test("compareTriplets returns [1, 1] when given [5, 6, 7] and [3, 6, 10]", () => {
	expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
});
