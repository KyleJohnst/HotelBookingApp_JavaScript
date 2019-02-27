<template lang="">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <!-- <p>Hello World</p> -->
      <h3>{{booking.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookingsGrid',
  props: ['bookings']
}
</script>

<style lang="css" scoped>
</style>
