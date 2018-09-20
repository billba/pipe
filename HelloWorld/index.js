module.exports = async function (context) {
    context.log('Hello, World');

    context.res = {
        body: "Hello, World"
    };
};
