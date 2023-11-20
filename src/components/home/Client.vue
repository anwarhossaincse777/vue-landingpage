
<script setup>

import client1 from '../../assets/img/clients/client-1.png';
import client2 from '../../assets/img/clients/client-2.png';
import client3 from '../../assets/img/clients/client-3.png';
import client4 from '../../assets/img/clients/client-4.png';
import client5 from '../../assets/img/clients/client-5.png';
import client6 from '../../assets/img/clients/client-6.png';


const clients = [
    {
    src: client1,
    alt: 'This is client 1 picture',
   },
   {
    src: client2,
    alt: 'This is client 2 picture',
   } ,
  {
    src: client3,
    alt: 'This is client 3 picture',
   } ,
  {
    src: client4,
    alt: 'This is client 4 picture',
   },
  {
    src: client5,
    alt: 'This is client 5 picture',
   }  ,
  {
    src: client6,
    alt: 'This is client 6 picture',
   }


]
</script>

<template>
  <!-- Clients Section - Home Page -->
  <section id="clients" class="clients">

    <div class="container-fluid" data-aos="fade-up">

      <div class="row gy-4">

        <div class="col-xl-2 col-md-3 col-6 client-logo" v-for="item in clients">
          <img :src="item?.src" class="img-fluid" :alt="item?.alt">
        </div><!-- End Client Item -->
      </div>

    </div>

  </section><!-- End Clients Section -->
</template>

<style scoped>

</style>