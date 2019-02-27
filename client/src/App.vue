<template lang="html">
  <div id="app">
    <booking-form />
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsGrid from './components/BookingsGrid';
import BookingForm from './components/BookingsForm';
import { eventBus } from './main';

export default {
  name: 'app',
  data(){
    return {
      bookings: []
    }
  },
  components: {
    BookingForm,
    BookingsGrid
  },
  mounted(){
    this.fetchBookings();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
      })

      eventBus.$on('booking-deleted', (id) => {
        this.deleteBooking(id)
      })

  },
  methods: {
    fetchBookings(){
      fetch('http://localhost:3000/api/bookings')
      .then(response => response.json())
      .then(bookings => this.bookings = bookings)
    },
    deleteBooking(id){
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    }
  }
}
</script>

<style lang="css">
body {
  display: flex;
  margin: 0 auto;
  background-color: #d87575;
  justify-content: center;
}
#app{
  text-align: center;
  width: 100%
}
</style>
