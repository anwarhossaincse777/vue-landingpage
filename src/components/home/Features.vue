

<script setup>

const heading="Features";
const smallParagraph="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

import src1 from '../../assets/img/features-light-1.jpg';

import src2 from '../../assets/img/features-light-2.jpg';
import src3 from '../../assets/img/features-light-3.jpg';

const featuresItem=[
  {
    title:"Corporis temporibus maiores provident",
    paragraph:"  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    src:src1,
    anotherSrc:src2,
    MoreSrc:src3,
    alt:"This is the source  images"
  }

]


</script>











<template>
  <section id="features" class="features">

    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{heading}}</h2>
      <p>{{smallParagraph}}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-4 align-items-center features-item">
        <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h3>{{featuresItem[0]?.title}}</h3>
          <p>{{featuresItem[0]?.paragraph}}</p>
          <a href="#" class="btn btn-get-started">Get Started</a>
        </div>
        <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
          <div class="image-stack">
            <img :src="featuresItem[0]?.src" :alt="featuresItem[0]?.alt" class="stack-front">
            <img :src="featuresItem[0]?.anotherSrc" :alt="featuresItem[0]?.alt" class="stack-back">
            <img :src="featuresItem[0]?.MoreSrc" :alt="featuresItem[0]?.alt" class="stack-back">
          </div>
        </div>
      </div><!-- Features Item -->

      <div class="row gy-4 align-items-stretch justify-content-between features-item ">
        <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
          <img :src="featuresItem[0]?.MoreSrc" :alt="featuresItem[0]?.alt" class="img-fluid" >
        </div>
        <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
          <h3>Sunt consequatur ad ut est nulla</h3>
          <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
          <ul>
            <li><i class="bi bi-check"></i>
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </li>
            <li><i class="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            <li><i class="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
          </ul>
          <a href="#" class="btn btn-get-started align-self-start">Get Started</a>
        </div>
      </div><!-- Features Item -->

    </div>

  </section><!-- End Features Section -->
</template>



<style scoped>

</style>