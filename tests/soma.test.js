function soma(a,b) {
    return a + b;
}

test("soma 2 + 2 = 4", () => {
    expect(soma(2, 2)).toBe(4);
});