

<script setup>

const heading="Services";
const title="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";


const items = [
  {
    icon:'<i class="bi bi-briefcase"></i>',
    title: 'Lorem Ipsum',
    paragraph:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    hrf:"services-details.html",
  },
  {
    icon:'<i class="bi bi-card-checklist"></i>',
    title: 'Dolor Sitema',
    paragraph:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    hrf:"services-details.html",
  } ,
  {
    icon:'<i class="bi bi-bar-chart"></i>',
    title: 'Magni Dolores',
    paragraph:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    hrf:"services-details.html",
  } ,
  {
    icon:'<i class="bi bi-binoculars"></i>',
    title: 'Sed ut Perspiciatis',
    paragraph:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    hrf:"services-details.html",
  },

  {
    icon:'<i class="bi bi-calendar4-week"></i>',
    title: 'Nemo Enim',
    paragraph:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    hrf:"services-details.html",
  },

  {
    icon:'<i class="bi bi-brightness-high"></i>',
    title: 'Eiusmod Tempor',
    paragraph:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    hrf:"services-details.html",
  },
]
</script>






<template>
  <!-- Services Section - Home Page -->
  <section id="services" class="services">

    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{heading}}</h2>
      <p>{{title}}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="100" v-for="item in items" :key="item.icon">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0" v-html="item?.icon"></div>
            <div>
              <h4 class="title"><a :href="item?.hrf" class="stretched-link"></a>{{item.title}}</h4>
              <p class="description">{{item?.paragraph}}</p>
            </div>
          </div>
        </div>
        <!-- End Service Item -->

      </div>

    </div>

  </section><!-- End Services Section -->
</template>



<style scoped>

</style>