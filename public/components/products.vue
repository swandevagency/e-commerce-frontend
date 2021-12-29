<template>
  <div>
    <div class="products-container">
      <div class="product-image-wrapper">
        <img v-if="product.src" :src="product.src" alt="product image" />
      </div>
      <div class="product-description-container">
        <p v-if="product.title">{{ product.title }}</p>
        <div class="price-fav-container">
          <p v-if="product.price">{{ product.price }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            v-if="!product.isFav"
          >
            <path
              id="Path_7"
              data-name="Path 7"
              d="M12,21.593C6.37,16.054,1,11.3,1,7.191A5.059,5.059,0,0,1,6.281,2C7.593,2,10.432,2.5,12,6.457c1.59-3.968,4.464-4.447,5.726-4.447A5.014,5.014,0,0,1,23,7.191c0,4.069-5.136,8.625-11,14.4M17.726,1.01A6.535,6.535,0,0,0,12,4.248,6.526,6.526,0,0,0,6.281,1,6.044,6.044,0,0,0,0,7.191C0,11.852,5.571,16.62,12,23c6.43-6.38,12-11.148,12-15.809A6.028,6.028,0,0,0,17.726,1.01"
              transform="translate(0 -1)"
              fill="#6b7280"
              fill-rule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            v-if="product.isFav"
          >
            <path
              fill="#6b7280"
              d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style lang="scss">
.products-container {
  display: flex;
  flex-direction: column;
  background-color: rgba($color: white, $alpha: 0.4);
  border-radius: 3px;
  color: #6b7280;
}
.product-image-wrapper {
  border-radius: 3px;
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    object-fit: cover;
    object-position: top;
  }
}
.product-description-container {
  display: flex;
  flex-direction: column;
  p {
    max-width: 90%;
  }
}
.price-fav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 16px;
    height: 16px;
  }
}
</style>
