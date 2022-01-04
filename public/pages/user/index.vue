<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="user-page-wrapper">
      <section class="register-login-wrapper">
        <nuxt-link to="/user/register">Register</nuxt-link>
        <nuxt-link to="/user/login">Login</nuxt-link>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.user-page-wrapper {
  padding: 35px;
  background-color: #e2c7c7;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-login-wrapper {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 40px;
  gap: 35px;
  border-radius: 3px;
  a {
    background-color: #e2c7c7;
    padding: 15px;
    width: 100px;
    text-align: center;
    border-radius: 3px;
  }
}
</style>
