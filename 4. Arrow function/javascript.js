const logger = log => console.log(log);
const multiplication = (a, b) => {
    return {
        a: a,
        b: b,
        'a*b': a * b
    }
};
const addition = (c, d) => ({
    c: c,
    d: d,
    'c+d': c + d
});

logger("Quach Van Bach");
console.log(multiplication(2, 3));
console.log(addition(4,5));