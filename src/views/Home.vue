<template>
  <div class="home">
    <h2>What's new</h2>
    <div class="card m-3" v-for="article in filteredArticles" :key="article.id">
      <div class="card-header">
        <h5 class="card-title">
          <a href="#" style="text-decoration: none">{{article.title}}</a>
        </h5>
        <!--{{article.title}} y :href="article.link"-->
      </div>

      <!-- <div class="card-body" v-for="articles in newsList" -->
      <div class="card-body">
        <!--newsList será la lista de noticias de la bd-->
        <p class="card-text">
          {{article.description}}
        </p>
      </div>

      <!--link a página parametrizada de article-->
      <div class="text-muted">
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">
            <a href="#" class>Entrar en artículo</a>
          </li>
          <li class="list-group-item">
            <a href="#">Comentarios</a>
            <span class="badge badge-primary badge-pill"></span>
            <!--numero de comentarios-->
          </li>
        </ul>

        <!--link a comentarios-->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      articles: [],
      apiUrl: 'https://meneameproyectoheroku.herokuapp.com/api/v1/articles'
    };
  },
  computed: {
    filteredArticles: function() {
      return this.articles.splice(0, 10);
    }
  },
  methods: {
    fetchArticles(){
      let allArticles = [];
      fetch(this.apiUrl)
        .then((res)=> {
          return res.json()
        })
        .then((data)=> {
          data.forEach(article => {
            let newArticle = {
              _id: article._id,
              title: article.title,
              description: article.description,
              link: article.link
            };
            allArticles.push(newArticle)
          })
          this.articles = allArticles;
          console.log(this.articles[0].description)
        })
    }
  },
  created() {
    this.fetchArticles();
  }
};

// https://meneameproyectoheroku.herokuapp.com/api/v1/articles
</script>


