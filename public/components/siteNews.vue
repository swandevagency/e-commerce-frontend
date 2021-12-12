<template>
  <div>
    <div class="site-news">
      <h6 class="first-news">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h6>
      <h1 class="off">80% off</h1>
      <h6 class="second-news">+ new arrivals just added</h6>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.site-news {
  background: rgba(255, 255, 255, 0.4);
  padding: 20px 30px 20px 30px;
  text-align: center;
  border-radius: 3px;
}
.first-news {
  font-size: 1.1em;
  font-weight: 300;
}
.off {
  font-size: 1.7em;
  font-weight: 800;
  margin-top: 12px;
}
.second-news {
  font-size: 1.1em;
  font-weight: 300;
  margin-top: 12px;
}
@media only screen and (min-width: 992px) {
  .first-news {
    font-size: 2em;
  }
  .off {
    font-size: 2.6em;
  }
  .second-news {
    font-size: 2em;
  }
}
</style>
