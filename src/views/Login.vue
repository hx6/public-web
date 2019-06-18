<template>
  <div class="container">
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id=""
          placeholder="Enter email"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id=""
          placeholder="Password"
        >
      </div>
      <button type="submit" class="btn btn-outline-dark">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'

}
</script>

