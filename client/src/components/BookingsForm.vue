<template lang="html">
<form id="" action="index.html" method="post" v-on:submit="addBooking">
  <h2>Create booking</h2>
  <div class="formStyle">
    <label for="name">Name:</label>
    <input type="text" >
  </div>

  <div class="formStyle">
    <label for="surname">Surname:</label>
    <input type="text" >
  </div>

  <div class="formStyle">
    <label for="email">Email</label>
    <input type="text" >
  </div>

  <div class="formStyle">
    <label for="checkedIn">Checked In</label>
    <input type="checkbox" >
  </div>

</form>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
