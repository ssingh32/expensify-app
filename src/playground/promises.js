const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("this is my resolved data");
    // }, 1500)
    reject('Something went wrong');
});

promise.then((data) => {

})