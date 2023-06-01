<template>
 <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <div class="login">
              <div class="card w-100 p-5">
                <h3 class="text-center">Log In</h3>
                <form action="">
                  <div class="form-group">
                    <label for="my-input">Email</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="text"
                      name=""
                      placeholder="Enter your email"
                      v-model="user.email"
                    />
                  </div>

                  <div class="form-group my-2">
                    <label for="my-input">Password</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="text"
                      name=""
                      placeholder="Enter your password"
                      v-model="user.password"
                    />
                  </div>

                  <div class="form-group my-2 text-center">
                       <span>Don't have an account? </span> <a class="text-center text-danger" href="" @click.prevent="$router.push({name:'register'})">Register</a>
                  </div>

                   <div class="form-group my-2 text-center">
                        <button class="btn btn-danger">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

<style>

</style>