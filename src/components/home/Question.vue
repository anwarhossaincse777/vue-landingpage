
<script setup>

const heading="Frequently Asked";
const sub_heading="Questions";
const smallParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit";
const className='faq-active';

const items=[
    {
       no:1,
       title:" Non consectetur a erat nam at lectus urna duis?",
       p:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
       no:2,
       title:". Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
       p:"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
  {
       no:3,
       title:". Dolor sit amet consectetur adipiscing elit pellentesque?",
       p:"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.",
    },
  {
       no:4,
       title:". Dolor sit amet consectetur adipiscing elit pellentesque?",
       p:"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.",
    },

  {
       no:5,
       title:". Dolor sit amet consectetur adipiscing elit pellentesque?",
       p:"Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
    },

    ]


</script>









<template>
  <!-- Faq Section - Home Page -->
  <section id="faq" class="faq">

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div class="content px-xl-5">
            <h3><span>{{heading}}</span><strong>{{sub_heading}}</strong></h3>
            <p>
             {{smallParagraph}}
            </p>
          </div>
        </div>

        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">

          <div class="faq-container"  v-for="item in items" :key="item.no">
            <div class="faq-item">
              <h3><span class="num">{{item.no}}</span> <span>{{item.title}}</span></h3>
              <div class="faq-content">
                <p>{{item.p}}</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div><!-- End Faq item-->


          </div>

        </div>
      </div>

    </div>

  </section><!-- End Faq Section -->
</template>



<style scoped>

</style>