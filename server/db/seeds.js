use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Kyle",
    surname: "Johnston",
    email: "x@x.com",
    checkedIn: false
  },
  {
    name: "John",
    surname: "Page",
    email: "x@x.com",
    checkedIn: false
  },
  {
    name: "Rober",
    surname: "Temple",
    email: "x@x.com",
    checkedIn: false
  },
  {
    name: "Cammy",
    surname: "Johnst",
    email: "x@x.com",
    checkedIn: false
  }
])
