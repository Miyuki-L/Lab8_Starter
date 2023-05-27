// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2

//Tests for isPhoneNumber
test("test isPhoneNumber on 712-381-1395", ()=> {
   expect(functions.isPhoneNumber("712-381-1395")).toBe(true);
})

test("test isPhoneNumber on (133)742-1395", ()=> {
   expect(functions.isPhoneNumber("(133)742-1395")).toBe(true);
})

test("test isPhoneNumber on 163238114212", ()=> {
   expect(functions.isPhoneNumber("163238114212")).toBe(false);
})

test("test isPhoneNumber on 424-42-42", ()=> {
   expect(functions.isPhoneNumber("424-42-42")).toBe(false);
})

//Tests for isEmail
test("test isEmail on javascript@golive.go", ()=> {
   expect(functions.isEmail("javascript@golive.go")).toBe(true);
})

test("test isEmail on a_@bc.co", ()=> {
   expect(functions.isEmail("a_@bc.co")).toBe(true);
})

test("test isEmail on @.com", ()=> {
   expect(functions.isEmail("@.com")).toBe(false);
})

test("test isEmail on 123@123.123", ()=> {
   expect(functions.isEmail("123@123.123")).toBe(false);
})

//Tests for isStrongPassword
test("test isStrongPassword on CSE110", ()=> {
   expect(functions.isStrongPassword("CSE110")).toBe(true);
})

test("test isStrongPassword on rEg3xpR3S10n", ()=> {
   expect(functions.isStrongPassword("rEg3xpR3S10n")).toBe(true);
})

test("test isStrongPassword on 110", ()=> {
   expect(functions.isStrongPassword("110")).toBe(false);
})

test("test isStrongPassword on AB3cd6EF9GH12IJ15", ()=> {
   expect(functions.isStrongPassword("AB3cd6EF9GH12IJ15")).toBe(false);
})


//Tests for isDate
test("test isDate on 5/27/2023", ()=> {
   expect(functions.isDate("05/27/2023")).toBe(true);
})

test("test isDate on 6/5/2222", ()=> {
   expect(functions.isDate("6/5/2222")).toBe(true);
})

test("test isDate on /1/2023", ()=> {
   expect(functions.isDate("/1/2023")).toBe(false);
})

test("test isDate on mm/dd/yyyy", ()=> {
   expect(functions.isDate("mm/dd/yyyy")).toBe(false);
})

//Tests for isHexColor
test("test isHexColor on #F3F", ()=> {
   expect(functions.isHexColor("#F3F")).toBe(true);
})

test("test isHexColor on #a3f5c9", ()=> {
   expect(functions.isHexColor("#a3f5c9")).toBe(true);
})

test("test isHexColor on $F3F", ()=> {
   expect(functions.isHexColor("$F3F")).toBe(false);
})

test("test isHexColor on #1GG", ()=> {
   expect(functions.isHexColor("#1GG")).toBe(false);
})