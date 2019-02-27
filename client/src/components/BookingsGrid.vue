<template lang="">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">

      <h3>{{booking.name}} {{booking.surname}}</h3>
      <p>{{booking.email}}</p>
      <label for="checkedIn">Check In</label>
      <input type="checkbox" v-on:change="checkIn(booking._id, booking.checkedIn)" v-model="booking.checkedIn">
      <div class="">
        <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
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
      fetch('http://localhost:3000/api/sightings/' + id,{
        method: 'PUT',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
      })
    }
    }
  }
</script>

<style lang="css" scoped>
</style>
