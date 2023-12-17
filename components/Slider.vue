<template>
  <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true
      }"
  >
    <SwiperSlide v-for="image in images" :key="image">
      <img :src="image" :alt="image">
    </SwiperSlide>
  </Swiper>
</template>


<script>
export default {
  name: "Slider",

  data() {
    return {
      images: ["master.png", "gallery.jpg", "master.png"]
}}}
</script>

<style scoped>

</style>
