<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="user-page-wrapper">
      <section class="panel-wrapper">
        <UserPanel v-if="active.user" />
        <OwnerPanel v-if="active.owner" />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: {
        user: false,
        owner: false,
        admin: false,
      },
    }
  },
  mounted() {
    if (!localStorage.getItem('authToken')) {
      this.$router.push('/user/register')
    }
    if (localStorage.getItem('role') === 'owner') {
      this.active.owner = true
    } else if (localStorage.getItem('role') === 'admin') {
      this.active.admin = true
    } else {
      this.active.user = true
    }
  },
  computed: {
    singleUser() {
      return this.$store.state.singleUser.singleUser
    },
    singleAdmin() {
      return this.$store.state.singleAdmin.singleAdmin
    },
    admins() {
      return this.$store.state.admins
    },
    categories() {
      return this.$store.state.categories.categories
    },
    subCategories() {
      return this.$store.state.subCategories.subCategories
    },
  },
  async created() {
    try {
      if (localStorage.getItem('role') === 'user') {
        await this.$store.dispatch('singleUser/getSingleUser')
      }
      if (localStorage.getItem('role') === 'admin') {
        await this.$store.dispatch('singleAdmin/getSingleAdmin')
        await this.$store.dispatch('categories/getCategories')
        await this.$store.dispatch('subCategories/getSubCategoies')
      }
      if (localStorage.getItem('role') === 'owner') {
        await this.$store.dispatch('singleAdmin/getSingleAdmin')
        await this.$store.dispatch('admins/getAdmins')
        await this.$store.dispatch('categories/getCategories')
        await this.$store.dispatch('subCategories/getSubCategories')
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="scss">
.user-page-wrapper {
  background-color: #e2c7c7;
  min-height: 100vh;
}
.panel-wrapper {
  margin-top: 68px;
}
</style>
