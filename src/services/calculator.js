

const throwIfUndefined = (value) => {
    if (!value) {
        throw new Error("null values are not accepted")
    }
}

const add = (a, b) => {

    throwIfUndefined(a);
    throwIfUndefined(b);

    return a + b;
}


module.exports ={
    add
}