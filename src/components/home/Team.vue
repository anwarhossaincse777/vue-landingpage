<script setup>


import portfolio2 from '../../assets/img/team/team-1.jpg';
import portfolio3 from '../../assets/img/team/team-2.jpg';
import portfolio4 from '../../assets/img/team/team-3.jpg';
import portfolio5 from '../../assets/img/team/team-4.jpg';
import portfolio6 from '../../assets/img/team/team-5.jpg';
import portfolio7 from '../../assets/img/team/team-6.jpg';


const heading = "Team";
const title = "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";


const list = [
  {
    name: 'Walter White',
    post: 'Chief Executive Officer',
    minip: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
    image: portfolio2,


    social: [
      {
        twitter: {
          link: 'https://twitter.com',
          icon: '<i class="bi bi-twitter"></i>'
        },

        facebook: {
          link: 'https://facebook.com',
          icon: '<i class="bi bi-facebook"></i>'
        },
        instagram: {
          link: 'https://instagram.com',
          icon: '<i class="bi bi-instagram"></i>'
        },
        linkdin: {
          link: 'https://linkedin.com',
          icon: '<i class="bi bi-linkedin"></i>'
        }
      }
    ]
  },
  {
    name: 'Sarah Jhonson',
    post: 'Product Manager',
    minip: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
    image: portfolio3,
    social: [{
      twitter: {
        link: 'https://twitter.com',
        icon: '<i class="bi bi-twitter"></i>'
      },

      facebook: {
        link: 'https://facebook.com',
        icon: '<i class="bi bi-facebook"></i>'
      },
      instagram: {
        link: 'https://instagram.com',
        icon: '<i class="bi bi-instagram"></i>'
      },
      linkdin: {
        link: 'https://linkedin.com',
        icon: '<i class="bi bi-linkedin"></i>'
      }
    },

    ]
  },
  {
    name: 'William Anderson',
    post: 'CTO',
    minip: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
    image: portfolio4,
    social: [{
      twitter: {
        link: 'https://twitter.com',
        icon: '<i class="bi bi-twitter"></i>'
      },

      facebook: {
        link: 'https://facebook.com',
        icon: '<i class="bi bi-facebook"></i>'
      },
      instagram: {
        link: 'https://instagram.com',
        icon: '<i class="bi bi-instagram"></i>'
      },
      linkdin: {
        link: 'https://linkedin.com',
        icon: '<i class="bi bi-linkedin"></i>'
      }
    },
    ]


  },
  {
    name: 'Amanda Jepson',
    post: 'Accountant',
    minip: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
    image: portfolio5,
    social: [{
      twitter: {
        link: 'https://twitter.com',
        icon: '<i class="bi bi-twitter"></i>'
      },

      facebook: {
        link: 'https://facebook.com',
        icon: '<i class="bi bi-facebook"></i>'
      },
      instagram: {
        link: 'https://instagram.com',
        icon: '<i class="bi bi-instagram"></i>'
      },
      linkdin: {
        link: 'https://linkedin.com',
        icon: '<i class="bi bi-linkedin"></i>'
      }
    },

    ]
  },
  {
    name: 'Brian Doe',
    post: 'Marketing',
    minip: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
    image: portfolio6,
    social: [{
      twitter: {
        link: 'https://twitter.com',
        icon: '<i class="bi bi-twitter"></i>'
      },

      facebook: {
        link: 'https://facebook.com',
        icon: '<i class="bi bi-facebook"></i>'
      },
      instagram: {
        link: 'https://instagram.com',
        icon: '<i class="bi bi-instagram"></i>'
      },
      linkdin: {
        link: 'https://linkedin.com',
        icon: '<i class="bi bi-linkedin"></i>'
      }
    },
    ]


  },
  {
    name: 'Josepha Palas',
    post: 'Operation',
    minip: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
    image: portfolio7,
    social: [
      {
        twitter: {
          link: 'https://twitter.com',
          icon: '<i class="bi bi-twitter"></i>'
        },

        facebook: {
          link: 'https://facebook.com',
          icon: '<i class="bi bi-facebook"></i>'
        },
        instagram: {
          link: 'https://instagram.com',
          icon: '<i class="bi bi-instagram"></i>'
        },
        linkdin: {
          link: 'https://linkedin.com',
          icon: '<i class="bi bi-linkedin"></i>'
        }
      },
    ],
  },


]


</script>


<template>

  <!-- Team Section - Home Page -->
  <section id="team" class="team">

    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ heading }}</h2>
      <p>{{ title }}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-5">


        <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200" v-for="item in list" :key="item.image">
          <div class="member-img">
            <img :src="item.image" class="img-fluid" alt="">
            <div class="social" v-for="list in item.social">
              <div v-for="all in list" :key="all.link">
                <a :href="all.link">
                  <span v-html="all.icon"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="member-info text-center">
            <h4>{{ item.name }}</h4>
            <span>{{ item.post }}</span>
            <p>{{ item.minip }}</p>
          </div>
        </div><!-- End Team Member -->


      </div>

    </div>

  </section><!-- End Team Section -->
</template>


<style scoped>

</style>