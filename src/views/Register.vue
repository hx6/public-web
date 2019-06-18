<template>
   <div class="container">
     <h1>Register</h1>
      
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin" @submit.prevent="signup">
        <span id="" class=""></span>
        <label for="email-register">Email</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="email"
        >
        <label for="password-register">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="password"
        >
        <button class="btn btn-outline-primary" type="submit">Create</button> <br>
        <!-- <button
          class="btn btn-outline-primary">Return to login</button> -->
      </form>
      <!-- /form -->
    <!-- /card-container -->
  </div>
</template>

<script>
export default {
  
}
</script>
