const guestList = "Our guests are: emma, jacob, isabella, ethan";

const guestListLength = guestList.length;
console.log(guestListLength);

const upperCasedGuestList = guestList.toUpperCase();
console.log(upperCasedGuestList);

const isEthanOnTheList = upperCasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList);

const subStringGuests = upperCasedGuestList.slice(16, guestList.length);
console.log(subStringGuests);

const guests = subStringGuests.split(" ");
console.log(guests);


