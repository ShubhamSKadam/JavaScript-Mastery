// Callback functions

const fetchUser = (username, callback) => {
    console.log("Fetching...");
    setTimeout(() => {
        callback({ username });
    }, 2000);
};

fetchUser("Shubham", (user) => {
    console.log(`Hello, ${user.username}`);
});
