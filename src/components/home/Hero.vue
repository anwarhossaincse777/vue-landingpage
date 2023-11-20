

<script setup>

import heroImage from '../../assets/img/hero-bg.jpg';
const  alt="This is hero image";
const title="Welcome to Our Website";
const smallText="We are team of talented designers making websites with Bootstrap";

</script>



<template>
  <section id="hero" class="hero">

    <img :src="heroImage" :alt="alt" data-aos="fade-in">

    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <h2 data-aos="fade-up" data-aos-delay="100">{{title}}</h2>
          <p data-aos="fade-up" data-aos-delay="200">{{smallText}}</p>
        </div>
        <div class="col-lg-5">
          <form action="#" class="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
            <input type="text" class="form-control" placeholder="Enter email address">
            <input type="submit" class="btn btn-primary" value="Sign up">
          </form>
        </div>
      </div>
    </div>

  </section><!-- End Hero Section -->
</template>







<style scoped>

</style>