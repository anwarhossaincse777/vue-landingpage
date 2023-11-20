
<script setup>

import src1 from '../../assets/img/cta-bg.jpg';

const heading="Call To Action";
const title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
</script>







<template>
  <!-- Call-to-action Section - Home Page -->
  <section id="call-to-action" class="call-to-action">

    <img :src="src1" alt="">

    <div class="container">
      <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
        <div class="col-xl-10">
          <div class="text-center">
            <h3>{{heading}}</h3>
            <p>{{title}}</p>
            <a class="cta-btn" href="#">Call To Action</a>
          </div>
        </div>
      </div>
    </div>

  </section><!-- End Call-to-action Section -->
</template>



<style scoped>

</style>