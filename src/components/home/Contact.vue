
<script setup>
import FormComponent from "../common/FormComponent.vue";

const heading = "Contact";
const smallParagraph = "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";


const items = [
  {
    title: 'Address',
    address: 'A108 Adam Street',
    place: "New York, NY 535022",
    icon:' <i class="bi bi-geo-alt"></i>',
  },
  {
    title: 'Call Us',
    address: '+1 5589 55488 55',
    place: "+1 6678 254445 41",
    icon:'  <i class="bi bi-envelope"></i>'
  },
  {
    title: 'Email Us',
    address: 'info@example.com',
    place: "contact@example.com",
    icon:'  <i class="bi bi-envelope"></i>'
  },
  {
    title: 'Open Hours',
    address: 'Monday - Friday',
    place: "9:00AM - 05:00PM",
    icon:'<i class="bi bi-clock"></i>'
  }
  ]



</script>







<template>
  <!-- Contact Section - Home Page -->
  <section id="contact" class="contact">

    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{heading}}</h2>
      <p>{{smallParagraph}}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-6">

          <div class="row gy-4">
            <div class="col-md-6" v-for="item in items" :key=" item.icon">
              <div class="info-item" data-aos="fade" data-aos-delay="200">
                <span v-html="item.icon"></span>
                <h3>{{item.title}}</h3>
                <p>{{item.address}}</p>
                <p>{{item.place}}</p>
              </div>
            </div><!-- End Info Item -->
          </div>

        </div>

       <FormComponent/>

      </div>

    </div>

  </section><!-- End Contact Section -->
</template>



<style scoped>

</style>