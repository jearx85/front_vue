<template>
    <h1>Actualizar post</h1>
    <div class="container">
        <form class="row g-3">

        <div class="col-md-4">
            <label for="category" class="form-label">Categoria</label>
            <input type="text" class="form-control" id="category" required name = "category"  v-model="post.category_id" readonly>

        </div>
        <div class="col-md-4">
            <label for="title" class="form-label">Titulo</label>
            <input type="text" class="form-control" id="title" required name = "title"  v-model="post.title">

        </div>
        <div class="col-md-6">
            <label for="description" class="form-label">Descripción</label>
            <input type="text" class="form-control" id="description" required name = "description"  v-model = "post.description">

        </div>
        <div class="col-md-3">
            <label for="state" class="form-label">Estado</label>
            <select class="form-select" id="state" required name = "state"  v-model ="post.state">
            <option selected disabled>Seleccione</option>
            <option value = '1'>Publicado</option>
            <option value = '0'>No publicado</option>
            </select>
        </div>
        <div class="col-12">
            <label for="content" class="form-label">Contenido</label>
            <input type="text" class="form-control" id="content" required name = "content"  v-model="post.content">
        </div>
        <div>
            <button class="btn btn-primary" type="submit" @click="updatePost">Actualizar</button>
        </div>
    </form>
</div> 


</template>

<script>
    export default {
        props: ['id'],
        data(){
                return{
                    post:{
                    category_id: "",
                    title: "",
                    description: "",
                    state: "",
                    content: ""
                    }
                }
            },
    
            async created(){
                const options = {
                    method: "GET"
                }

                const response = await fetch("http://127.0.0.1:8000/api/post/" + this.$route.params.id+ "/edit", options);
                //console.log(this.$route.params.id);
                const {data: post} = await response.json();

                this.post = post;
                console.log("created");
            },
            methods:{
               async updatePost(e){
                e.preventDefault();
                const options = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(this.post)
                }
               
                const response = await fetch("http://127.0.0.1:8000/api/post/" + this.$route.params.id+ "/update",options);
                const dataPost = await response.json();
                //console.log(dataPost);

                this.post = dataPost;
                alert("Post actualizado")
                console.log("actualizado")
                //window.location.href="/"
                this.$router.push({name: 'homePost'});
            }

            }
            
        }

</script>

<style scoped>
.btn{
    background-color: lightslategrey;
    font-weight: bold;
    box-shadow: 1px 1px black;
    width: 15%;
}
.btn:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

.container {
    width: 50%;
    margin-top: 15px;
    align-items: stretch;
    padding: 15px;
    border: 1px black;
}

#categoryName {
  width: 50%;
}

h1{
    text-align: center;
    margin-top: 15px;
}



</style>