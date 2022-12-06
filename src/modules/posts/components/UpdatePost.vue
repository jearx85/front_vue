<template>
    <h1>Actualizar post</h1>
    <div class="container">
        <form class="row g-3">
        <div class="col-md-4">
            <label for="categoria" class="form-label">Categoría</label>
            <select class="form-select" v-model="selectCategory">
                <option disabled selected>Seleccione una categoría</option>
                <option v-for="categ in categories" :key="categ.id" :value="categ.id">{{ categ.name }}</option>
            </select>

        </div>
        <div class="col-md-4">
            <label for="title" class="form-label">Titulo</label>
            <input type="text" class="form-control" id="title" required name = "title"  v-model="posts.title">

        </div>
        <div class="col-md-6">
            <label for="description" class="form-label">Descripción</label>
            <input type="text" class="form-control" id="description" required name = "description"  v-model = "posts.description">

        </div>
        <div class="col-md-3">
            <label for="state" class="form-label">Estado</label>
            <select class="form-select" id="state" required name = "state"  v-model ="posts.state">
            <option selected disabled>Seleccione</option>
            <option value = '1'>Publicado</option>
            <option value = '0'>No publicado</option>
            </select>
        </div>
        <div class="col-12">
            <label for="content" class="form-label">Contenido</label>
            <input type="text" class="form-control" id="content" required name = "content"  v-model="posts.content">
        </div>
        <div>
            <button class="btn btn-primary" type="submit" @click="newPost">Actualizar</button>
        </div>
    </form>
</div> 


</template>

<script>
export default {
        data(){
            return{
                posts: [],
                categories: [], 
                selectCategory: ""
            }
        },
        created:function(){

        },
        methods:{
            getById(){
                fetch("http://127.0.0.1:8000/api/post/"+ this.$route.params.id)
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.log(datosRespuesta)
                    this.posts=[0]
                })
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