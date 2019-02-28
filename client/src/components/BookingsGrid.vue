<template lang="">
  <div id="bookingsGrid">
    <div class="bookingWrapper">
      <h2>Guests</h2>
      <div class="booking-card" v-for="booking in bookings" v-if="!booking.checkedIn">
        <h3>{{booking.name}} {{booking.surname}}</h3>
        <p>{{booking.email}}</p>
        <label for="checkedIn">Checked In</label>
        <input type="checkbox" v-on:change="checkIn(booking._id, booking.checkedIn)" v-model="booking.checkedIn">
        <div class="dlt-btn">
          <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
        </div>
      </div>
    </div>

    <div class="bookingWrapper">
      <h2>Checked In</h2>
      <div class="booking-card" v-for="booking in bookings" v-if="booking.checkedIn">
        <h3>{{booking.name}} {{booking.surname}}</h3>
        <p>{{booking.email}}</p>
        <label for="checkedIn">Checked In</label>
        <input type="checkbox" v-on:change="checkIn(booking._id, booking.checkedIn)" v-model="booking.checkedIn">
        <div class="dlt-btn">
          <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
  name: 'bookingsGrid',
  props: ['bookings'],
  methods: {
    deleteBooking(id){
      fetch('http://localhost:3000/api/bookings/' + id, {
        method: 'DELETE'
      })
      .then(() => eventBus.$emit('booking-deleted', id))
    },
    checkIn(id, checkedInState){
      const updateCheckIn = {
        checkedIn: checkedInState
      }
      // console.log(checkedInState);
      fetch('http://localhost:3000/api/bookings/' + id,{
        method: 'PUT',
        body: JSON.stringify(updateCheckIn),
        headers: { 'Content-Type': 'application/json'}
      })
    }
  }
}
</script>

<style lang="css" scoped>
#bookingsGrid {
  display: flex;
  justify-content: center;
  background: #545454cf;
  margin: auto;

  max-width: 65%;
  box-shadow: 1px 10px 10px 8px rgba(0, 0, 0, .5);
  border-radius: 8px;
}
.bookingWrapper {
margin:auto;
margin-top: 15px;
}

.booking-card {
background: rgba(255, 255, 255, 0.7);
border-radius: 5px;
padding: 10px;
margin: 10px;
min-width: 130px;
box-shadow: 5px 6px 9px rgba(0, 0, 0, .5);
}

.dlt-btn{
  margin-top: 6px;
}
</style>
