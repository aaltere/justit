function hello()
{
    console.log("Hello, everyone");
}

hello();
setTimeout(hello, 10000);

setTimeout(message =>
{
    console.log(`This is a message: ${message}`);
}, 5000, "Hello, world!");