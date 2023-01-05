const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("[Now we have the user]");

            resolve({ username });
        }, 2000);
    });
};

const fetchUserPhotos = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Now we have the photos for ${username}`);
            resolve(["Photo1", "Photo2"]);
        }, 2000);
    });
};

const fetchPhotoDetails = (photo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`[Now we have the photo details ${photo}]`);
            resolve("details...");
        }, 2000);
    });
};

// This was one way of calling the function
// fetchUser("Shubham")
//     .then((user) => fetchUserPhotos(user.username))
//     .then((photos) => fetchPhotoDetails(photos[0]))
//     .then((details) => console.log(`Your photo details are ${details}`));

// The second way is using Async ==> Await

const displayData = async () => {
    const user = await fetchUser("Shubham");
    const photos = await fetchUserPhotos(user.username);
    const details = await fetchPhotoDetails(photos[0]);

    console.log(details);
};

displayData();
