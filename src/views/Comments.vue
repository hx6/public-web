<template>
  <div class>
    <div class="card m-13">
      <div class="card-header">
        <h5 class="card-title">
          <a :href="fakeLink" style="text-decoration: none;">TITULO</a>
        </h5>
        <!--{{article.title}} y :href="article.link"-->
      </div>
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio at debitis, omnis optio cupiditate eligendi praesentium, necessitatibus
          reprehenderit doloremque consequuntur minus quibusdam fuga fugiat quia quidem ducimus commodi? Error, vel!
        </p>
      </div>
    </div>
    <!--formulario para comentar-->
    <div class="col-sm-3 my-1">
    <form action="">
      <input type="text" placeholder="Nombre" class="form-control">
      <input type="textarea" placeholder="Comentario" id="userComment" class="form-control">
      <input type="submit">
    </form>
    </div>
    <!--lsita de comentarios-->
    <div class="m-13">
      <h5>Comments</h5>
      <ul class="list-group list-group-flush">
      <li 
      v-for="comment in comments"
        :key="comment.id"
        class="list-group-item">
         <h6>Pepito</h6>
        <!--user.name-->
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <!--comment text-->
      </li>
       
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      comments: [1, 2, 3, 4],
      fakeLink:
        "https://sevilla.abc.es/andalucia/sevi-juez-caso-andalucia-maria-nunez-baja-salud-201906181503_noticia.html"
    };
  }
};
</script>
