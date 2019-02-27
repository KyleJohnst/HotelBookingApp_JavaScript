<template lang="html">
  <form id="" action="index.html" method="post" v-on:submit="addBooking">
    <h2>Create booking</h2>
    <div class="formStyle">
      <label for="name">Name:</label>
      <input type="text" v-model="name" required/>
    </div>

    <div class="formStyle">
      <label for="surname">Surname:</label>
      <input type="text" v-model="surname" required/>
    </div>

    <div class="formStyle">
      <label for="email">Email</label>
      <input type="text" v-model="email" required/>
    </div>

  <input type="submit" value="Save" id="save"/>
</form>
</template>

<script>
import {eventBus} from '../main';

export default {
  name: 'BookingsForm',
  data(){
    return {
      name: '',
      surname: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    addBooking(e){
      e.preventDefault()
      if(this.name || this.surname || this.email === '') return;
      const booking = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        checkedIn: this.checkedIn
      }
      fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => {
        eventBus.$emit('booking-added', res);
        this.name = this.surname = this.email = "";
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
