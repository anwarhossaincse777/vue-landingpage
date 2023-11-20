

<script setup>

const aboutSection=[

  {
     heading:"About Us !!",
     title:"Ducimus rerum libero reprehenderit cumque",
    smallParagraph:"Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.",
     hrf:"https://www.google.com/",
    icon:'<i class="bi bi-arrow-right\"></i>',
  },

  {
     title:"Eius provident",
     smallParagraph:"Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem",
     hrf:"https://www.google.com/",
    icon: '<i class="bi bi-buildings"></i>',
  },
  {
     title:"Rerum aperiam",
     smallParagraph:"Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia",
     hrf:"https://www.google.com/",
    icon: '     <i class="bi bi-clipboard-pulse"></i>',
  },
  {
     title:"Veniam omnis",
     smallParagraph:"Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti",
     hrf:"https://www.google.com/",
    icon: '     <i class="bi bi-command"></i>',
  },
  {
     title:"Delares sapiente",
     smallParagraph:"Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda",
     hrf:"https://www.google.com/",
    icon: '<i class="bi bi-graph-up-arrow"></i>',
  },


]




</script>






<template>
  <!-- About Section - Home Page -->
  <section id="about" class="about">

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row align-items-xl-center gy-5">

        <div class="col-xl-5 content">
          <h3>{{aboutSection[0]?.heading}}</h3>
          <h2>{{aboutSection[0]?.title}}</h2>
          <p>{{aboutSection[0]?.smallParagraph}}</p>
          <a :href="aboutSection[0]?.hrf" class="read-more">

            <span>Read More</span>

            <span v-html="aboutSection[0]?.icon"></span>
          </a>
        </div>

        <div class="col-xl-7">
          <div class="row gy-4 icon-boxes">

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="icon-box">
                <span  v-html="aboutSection[1]?.icon"></span>
                <h3>{{aboutSection[1]?.title}}</h3>
                <p>{{aboutSection[1]?.smallParagraph}}</p>
              </div>
            </div> <!-- End Icon Box -->

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="icon-box">
                <span  v-html="aboutSection[2]?.icon"></span>

                <h3>{{aboutSection[2]?.title}}</h3>
                <p>{{aboutSection[2]?.smallParagraph}}</p>
              </div>
            </div> <!-- End Icon Box -->

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="icon-box">
                <span  v-html="aboutSection[3]?.icon"></span>

                <h3>{{aboutSection[3]?.title}}</h3>
                <p>{{aboutSection[3]?.smallParagraph}}</p>
              </div>
            </div> <!-- End Icon Box -->

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="icon-box">
                <span  v-html="aboutSection[4]?.icon"></span>

                <h3>{{aboutSection[4]?.title}}</h3>
                <p>{{aboutSection[4]?.smallParagraph}}</p>
              </div>
            </div> <!-- End Icon Box -->

          </div>
        </div>

      </div>
    </div>

  </section><!-- End About Section -->
</template>



<style scoped>

</style>