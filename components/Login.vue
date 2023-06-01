<template>
    <section class="py">
        <div class="container">
            <div class="row">
                <div class="col-md-6 py-5 d-none d-md-block">
                    <img src="@/image/logo.png" alt="Logo" class="img-fluid" style="height: 90vh; width: 1200px"  />
                </div>
                <div class="col-md-6 align-self-center">
                    <div class="login">
                        <div class="card" style="height: 60vh; width: 500px"  >
                    <h3 class=" text-center mb-4">Log In</h3>
                            <div class="container">
                                <form>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input id="email" class="form-control" type="text" placeholder="Enter your email" />
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input id="password" class="form-control" type="password"
                                            placeholder="Enter your password" />
                                    </div>

                                    <div class="form-group text-center mt-3">
                                        <a class="text-primary" href="">Forgot Password?</a>
                                    </div>

                                    <div class="form-group text-center">
                                        <button class="btn btn-primary btn-block">Log In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card p-3 mt-4" style="width: 350px; height:50px;">
              <h6 class="mb-4">Don't have an account? 

                <a class="text-primary" href="">Sign Up</a>

              </h6>
              
                </div>
            </div>
                </div>
                </div>
        </div>
    </section>
</template>
  
<script setup>
  // Your script code
</script>
  
<style>
.login {
    margin-top: 100px;
}

.card {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

.btn-block {
    border-radius: 4px;
}

img {
    max-width: 300px;
    height: 300px;
}

.text-center {
    text-align: center;
}

.mb-4 {
    margin-bottom: 1rem;
}

.card {
    margin: 0 auto;
    height: 350px;
}

.form-group label {
  margin-bottom: 0.5rem;
}

.form-group:not(:last-child) {
  margin-bottom: 1.5rem;
}
</style>
  


