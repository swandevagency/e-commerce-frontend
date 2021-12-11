<template>
  <div>
    <div class="home-page-wrapper">
      <section class="home-page-intro-wrapper">
        <h6 class="home-page-intro">Start shopping with confidence</h6>
      </section>
      <section class="site-news-wrapper">
        <SiteNews />
      </section>
      <section class="home-page-categories-wrapper">
        <h1 class="home-page-categories-title">Categories</h1>
        <div class="home-page-categories-container">
          <HomePageCategories />
        </div>
      </section>
      <section class="home-page-new-products-wrapper">
        <h1 class="home-page-new-products-title">New products</h1>
        <div class="home-page-new-products-container">
          <NewProducts />
        </div>
      </section>
      <section class="home-page-offers-wrapper">
        <SiteOffer />
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.home-page-wrapper {
  padding: 35px;
  background-color: #e2c7c7;
}
.home-page-intro-wrapper {
  text-align: center;
}
.home-page-intro {
  font-weight: 300;
  font-size: 0.9em;
}
.site-news-wrapper {
  margin-top: 35px;
}
.home-page-categories-wrapper {
  margin-top: 35px;
}
.home-page-categories-title {
  font-size: 1.1em;
  font-weight: 500;
}
.home-page-categories-container {
  margin-top: 35px;
}
.home-page-new-products-wrapper {
  margin-top: 35px;
}
.home-page-new-products-title {
  font-size: 1.1em;
  font-weight: 500;
}
.home-page-new-products-container {
  margin-top: 35px;
}
.home-page-offers-wrapper {
  margin-top: 35px;
}
@media only screen and (min-width: 992px) {
  .home-page-wrapper {
    padding: 60px;
  }
  .home-page-intro {
    font-size: 1.3em;
  }
  .site-news-wrapper {
    margin-top: 60px;
  }
  .home-page-categories-wrapper {
    margin-top: 60px;
  }
  .home-page-categories-title {
    font-size: 1.8em;
  }
  .home-page-categories-container {
    margin-top: 60px;
  }
  .home-page-new-products-wrapper {
    margin-top: 60px;
  }
  .home-page-new-products-title {
    font-size: 1.8em;
  }
  .home-page-new-products-container {
    margin-top: 60px;
  }
  .home-page-offers-wrapper {
    margin-top: 60px;
  }
}
</style>
