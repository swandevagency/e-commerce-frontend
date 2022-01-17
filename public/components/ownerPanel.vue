<template>
  <div>
    <div class="admin-personal-info">
      <p class="owner-firstname">
        {{
          singleAdmin.adminpersonalinfo
            ? singleAdmin.adminpersonalinfo.firstname
            : ''
        }}
      </p>
      <p class="owner-lastname">
        {{
          singleAdmin.adminpersonalinfo
            ? singleAdmin.adminpersonalinfo.lastname
            : ''
        }}
      </p>
    </div>
    <section class="eidt-profile-wrapper">
      <EditProfile />
    </section>
    <section class="admin-management-wrapper">
      <p class="admin-management-title">Admin management</p>
      <div class="admin-management-component-container">
        <AdminManagement />
      </div>
    </section>
    <section class="admins-wrapper">
      <p class="admins">admins</p>
      <div class="admins-component-container">
        <Admins class="admins-container" />
      </div>
    </section>
    <section class="category-management-wrapper">
      <p class="category-management-title">category managment</p>
      <div class="category-management-container-component">
        <CategoryManagement class="category-management-container" />
      </div>
    </section>
    <section class="admin-panel-categories-wrapper">
      <p class="admin-panel-categories-title">categories</p>
      <div class="admin-panel-categories-container-component">
        <AdminPanelCategories class="admin-panel-categories" />
      </div>
    </section>
    <section class="category-management-wrapper">
      <p class="category-management-title">SubCategory management</p>
      <div class="category-management-container-component">
        <SubCategoryManagement class="category-management-container" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    singleAdmin() {
      return this.$store.state.singleAdmin.singleAdmin
    },
    admins() {
      return this.$store.state.admins
    },
    categories() {
      return this.$store.state.categories.categories
    },
  },
}
</script>

<style lang="scss">
.admin-personal-info {
  display: flex;
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 20px;
}
.owner-firstname {
  margin-right: 5px;
  font-size: 1.5em;
}
.owner-lastname {
  font-size: 1.5em;
}
.admin-management-wrapper {
  margin-top: 10px;
  padding: 20px;
}
.admin-management-title {
  font-size: 1.2em;
  font-weight: 200;
  text-transform: capitalize;
}
.admins {
  font-size: 1.1em;
  font-weight: 200;
  text-transform: capitalize;
  margin-left: 20px;
}
.admins-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px;
}
.category-management-wrapper {
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 20px;
}
.admin-panel-categories-wrapper {
  padding: 20px;
}
.admin-panel-categories-title {
  margin-bottom: 10px;
}
.admin-panel-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
</style>
