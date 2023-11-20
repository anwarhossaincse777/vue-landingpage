
<script setup>

import mainImage from '../../assets/img/stats-bg.jpg';
const  alt= 'This is the Main Image';

const all = [
  {

    title: 'Clients',
    starts:0,
    end:232,
  },
  {
    title: 'Projects',
    starts:0,
    end:521,
  } ,
  {
    title: 'Hours Of Support',
    starts:0,
    end:1453,
  } ,
  {
    title: 'Works',
    starts:0,
    end:32,
  },
]

</script>









<template>
  <section id="stats" class="stats">

    <img :src="mainImage" :alt="alt" data-aos="fade-in">

    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-3 col-md-6" v-for="item in all" :key="item.title">
          <div class="stats-item text-center w-100 h-100">
            <span :data-purecounter-start="item?.starts" :data-purecounter-end="item?.end" data-purecounter-duration="1" class="purecounter"></span>
            <p>{{item.title}}</p>
          </div>
        </div><!-- End Stats Item -->

      </div>

    </div>

  </section><!-- End Stats Section -->
</template>



<style scoped>

</style>