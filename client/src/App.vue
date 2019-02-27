<template lang="html">
  <div id="app">
    <bookings-grid/>
  </div>
</template>

<script>
import BookingsGrid from './components/BookingsGrid';
import { eventBus } from './main';

export default {
  name: 'app',
  data(){
    return {
      bookings: []
    }
  },
  components: {
    // BookingForm,
    BookingsGrid
  },
  mounted(){
    this.fetchBookings();
  },
  methods: {
    fetchBookings(){
      fetch('http://localhost:3000/api/bookings')
      .then(res = res.json())
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
