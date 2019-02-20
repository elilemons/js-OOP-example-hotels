"use strict";

// // This is the old way of doing things
// let hotel = {
//     name: 'JW Marriot',
//     rooms: 40,
//     booked: 25,
//     gym: true,
//     pool: true,
//     roomTypes: ['twin', 'double', 'suite', 'penthouse'],
//     checkAvailibility: () => {
//         return this.rooms - this.booked;
//     }
// }

// // Now we can use this

class Hotel {
    constructor(name, rooms, booked, gym, pool, roomTypes) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
        this.gym = gym;
        this.pool = pool;
        this.roomTypes = roomTypes;
    }
    
    checkAvailibility() {
        return this.rooms - this.booked;
    }

    bookRoom() {
        if (this.checkAvailibility() > 0) {
            this.booked++;
        }
    }

    bookRooms(numberOfRooms) {
        if (this.checkAvailibility() >= numberOfRooms) {
            this.booked += numberOfRooms;
        }
    }
}

let jwMarriot = new Hotel( 
    "JW Marriot", 
    100, 
    25,
    true,    
    true,
    [ "twin",
      "double",
      "suite",
      "penthouse" ]  );

let amway = new Hotel(
    "Amway",
    100,
    40,
    true,
    true,
    [   "twin",
        "double",
        "suite",
        "penthouse",
        "conferenceRoom"]
);

console.log(`Does JW Marriot have availability? ${jwMarriot.checkAvailibility()} rooms available.`);
console.log(`Does Amway have availability? ${amway.checkAvailibility()} rooms available.`);

console.log(`Let's book a room at JW Marriot. How many rooms are available now? ${jwMarriot.checkAvailibility()} rooms available.`);
jwMarriot.bookRoom();
console.log(`Let's book a room at Amyway. How many rooms are available now? ${amway.checkAvailibility()} rooms available.`);
amway.bookRoom();
console.log(`There's a conference in town for your work, we need 12 rooms at each hotel.`);
amway.bookRooms(12);
jwMarriot.bookRooms(12);
console.log(`Now there are ${amway.checkAvailibility()} rooms available at Amyway.`);
console.log(`Now there are ${jwMarriot.checkAvailibility()} rooms available at JW Marriot.`);