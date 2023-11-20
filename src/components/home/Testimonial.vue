
<script setup>

import portfolio2 from '../../assets/img/testimonials/testimonials-1.jpg';
import portfolio3 from '../../assets/img/testimonials/testimonials-2.jpg';
import portfolio4 from '../../assets/img/testimonials/testimonials-3.jpg';
import portfolio5 from '../../assets/img/testimonials/testimonials-4.jpg';
import portfolio6 from '../../assets/img/testimonials/testimonials-5.jpg';





const heading="Testimonials";
const p=" Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n" +
    "            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";

const slider=[
    {
     image:portfolio2,
      name: 'Walter White',
      post: 'Chief Executive Officer',
     comments:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
    },
  {
     image:portfolio3,
      name: 'Walter White',
      post: 'Chief Executive Officer',
     comments:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
    } ,
  {
     image:portfolio4,
      name: 'Walter White',
      post: 'Chief Executive Officer',
     comments:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
    } ,
  {
     image:portfolio5,
      name: 'Walter White',
      post: 'Chief Executive Officer',
     comments:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
    } ,
  {
     image:portfolio6,
      name: 'Walter White',
      post: 'Chief Executive Officer',
     comments:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
    }

]



</script>










<template>

  <!-- Testimonials Section - Home Page -->
  <section id="testimonials" class="testimonials">

    <div class="container">

      <div class="row align-items-center">

        <div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
          <h3>{{heading}}</h3>
          <p>
           {{p}}
          </p>
        </div>

        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">

          <div class="swiper">
            <template class="swiper-config">
              {
              "loop": true,
              "speed" : 600,
              "autoplay": {
              "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
              "el": ".swiper-pagination",
              "type": "bullets",
              "clickable": true
              }
              }
            </template>
            <div class="swiper-wrapper">

              <div class="swiper-slide"  v-for="list in slider" :key="list.image">
                <div class="testimonial-item">
                  <div class="d-flex">
                    <img :src="list.image" class="testimonial-img flex-shrink-0" alt="">
                    <div>
                      <h3>{{list.name}}</h3>
                      <h4>{{list.post}}</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>{{list.comments}}</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div><!-- End testimonial item -->

            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>

      </div>

    </div>

  </section><!-- End Testimonials Section -->
</template>



<style scoped>

</style>