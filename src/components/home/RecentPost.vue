<script setup>

import portfolio2 from '../../assets/img/blog/blog-1.jpg';
import portfolio3 from '../../assets/img/blog/blog-2.jpg';
import portfolio4 from '../../assets/img/blog/blog-3.jpg';
import portfolio5 from '../../assets/img/blog/blog-4.jpg';
import portfolio6 from '../../assets/img/blog/blog-5.jpg';
import portfolio7 from '../../assets/img/blog/blog-6.jpg';
import portfolio8 from '../../assets/img/blog/blog-author.jpg';
import portfolio9 from '../../assets/img/blog/blog-author-2.jpg';
import portfolio10 from '../../assets/img/blog/blog-author-3.jpg';


const heading = "Recent Posts";
const smallParagraph = "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

const items = [
  {
    title: 'Politics',
    minip: 'Dolorum optio tempore voluptas dignissimos',
    image: portfolio2,
    author: [
      {
        name: 'Walter White',
        date: 'Jan 1, 2022',
        image: portfolio8,

      }
    ]
  },
  {
    title: 'Sports',
    minip: 'Nisi magni odit consequatur autem nulla dolorem',
    image: portfolio3,
    author: [
      {
        name: 'Allisa Mayer',
        date: 'Jan 5, 2022',
        image: portfolio9,

      }
    ]
  },
  {
    title: 'Entertainment',
    minip: 'Possimus soluta ut id suscipit ea ut in quo quia et soluta',
    image: portfolio4,
    author: [
      {
        name: 'Mark Dower',
        date: 'Jun 22, 2022',
        image: portfolio10,

      }
    ]
  }

]

</script>


<template>
  <!-- Recent-posts Section - Home Page -->
  <section id="recent-posts" class="recent-posts">

    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ heading }}</h2>
      <p>{{ smallParagraph }}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-4">

        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100" v-for="item in items" :key="item.title">
          <article>

            <div class="post-img">
              <img :src="item.image" alt="" class="img-fluid">
            </div>

            <p class="post-category">{{item.title}}</p>

            <h2 class="title">
              <a href="blog-details.html">{{item.minip}}</a>
            </h2>

            <div class="d-flex align-items-center" v-for="singleItem in item.author" :key="singleItem.name">
              <img :src="singleItem.image" alt="" class="img-fluid post-author-img flex-shrink-0">
              <div class="post-meta">
                <p class="post-author">{{singleItem.name}}</p>
                <p class="post-date">
                  <time datetime="2022-01-01">{{singleItem.date}}</time>
                </p>
              </div>
            </div>

          </article>
        </div><!-- End post list item -->
      </div><!-- End recent posts list -->

    </div>

  </section><!-- End Recent-posts Section -->
</template>


<style scoped>

</style>