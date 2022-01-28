

const isAccepted = (grade) => {

    if (grade >= 10) {
        return Promise.resolve(true);
    }

    return Promise.reject(false);

}

module.exports = {
    isAccepted
}