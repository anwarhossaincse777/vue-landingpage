
<script setup>

import portfolio1 from '../../assets/img/masonry-portfolio/masonry-portfolio-1.jpg';

import portfolio2 from '../../assets/img/masonry-portfolio/masonry-portfolio-2.jpg';
import portfolio3 from '../../assets/img/masonry-portfolio/masonry-portfolio-3.jpg';
import portfolio4 from '../../assets/img/masonry-portfolio/masonry-portfolio-4.jpg';
import portfolio5 from '../../assets/img/masonry-portfolio/masonry-portfolio-5.jpg';
import portfolio6 from '../../assets/img/masonry-portfolio/masonry-portfolio-6.jpg';
import portfolio7 from '../../assets/img/masonry-portfolio/masonry-portfolio-7.jpg';
import portfolio8 from '../../assets/img/masonry-portfolio/masonry-portfolio-8.jpg';
import portfolio9 from '../../assets/img/masonry-portfolio/masonry-portfolio-9.jpg';







const heading="Portfolio";
const smallParagraph="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

const lists=[
  {
    id:1,
    heading:'App 1',
    image1:portfolio1,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },{
    id:2,
    heading:'App 1',
    image1:portfolio2,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },
  {
    id:3,
    heading:'App 1',
    image1:portfolio3,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },
  {
    id:4,
    heading:'App 1',
    image1:portfolio4,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },
  {
    id:5,
    heading:'App 1',
    image1:portfolio5,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },
  {
    id:6,
    heading:'App 1',
    image1:portfolio6,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },
  {
    id:7,
    heading:'App 1',
    image1:portfolio7,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },
  {
    id:8,
    heading:'App 1',
    image1:portfolio8,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  },
  {
    id:9,
    heading:'App 1',
    image1:portfolio9,
    paragraph:"Lorem ipsum, dolor sit",
    link1:"",
    link2:"portfolio-details.html",
  }

];



</script>












<template>
  <section id="portfolio" class="portfolio">

    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{heading}}</h2>
      <p>{{smallParagraph}}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Card</li>
          <li data-filter=".filter-branding">Web</li>
        </ul><!-- End Portfolio Filters -->

        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item" v-for="item in lists" :key="item.id" :class="item.id==1?'filter-app':'filter-product'">
            <img :src="item.image1" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{item.heading}}</h4>
              <p>{{item.paragraph}}</p>
              <a :href="item.link1" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a :href="item.link2" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div><!-- End Portfolio Item -->

        </div><!-- End Portfolio Container -->

      </div>

    </div>

  </section><!-- End Portfolio Section -->
</template>



<style scoped>

</style>