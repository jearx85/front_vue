<template>
   <h1 class = "title">Gestión de posts</h1>
    <div class="container">
        
        <table class="table table-hover table-responsive-lg">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Categoria</th>
                <th scope="col">Titulo</th>
                <th scope="col">Descripción</th>
                <th scope="col">Estado</th>
                <th scope="col">Contenido</th>
                <th scope="col">Creado</th>
                <th scope="col">Actualizado</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id" >
                <td>{{ post.id }}</td>
                <td>{{ post.category_id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.description }}</td>
                <td>{{ post.state }}</td>
                <td>{{ post.content }}</td>
                <td>{{ post.created_at }}</td>
                <td>{{ post.updated_at }}</td>
                <td><router-link :to = "{name:'EditPost', params:{id:post.id}}">
                    <button class="btn_edit">Editar</button>
                    </router-link>
                    <button class = "btn_delete" @click="deletePost(post.id)">Eliminar</button>
                </td>
                </tr>
                
            </tbody>
        </table>
        <router-link to = '/create/posts'>
        <button type="button" class="btn">Nuevo post</button>
        </router-link>
</div>

</template>

<script>
export default {
    props: ['id'],
       async created(){
            const options = {
                method: "GET"
            }

            const response = await fetch("http://127.0.0.1:8000/api/post/all", options);
            const data = await response.json();

            console.log(data);

            this.posts = data.data;
        },
        data(){
            return{
                posts: []
    }
        },
        methods:{
            async deletePost(id){
                //console.log(id);
                const options = {
                method: "DELETE",
                headers: { 
                    'Content-Type': 'application/json',
                },
            }

                const response = await fetch("http://127.0.0.1:8000/api/post/"+ id +"/destroy", options);
                const data = await response.json();
                // console.log(data.data.newList);
                alert("Post eliminado")
                this.posts = data.data;
                this.$router.push({name: 'homePost'});
            
            }
        }
    }

</script>

<style scoped>
.container{
    margin-top: 15px;
}

.title{
    text-align: center;
    margin-top: 15px;
}

.btn{
    background-color: lightslategrey;
    font-weight: bold;
    box-shadow: 1px 1px black;
}
.btn:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

.btn_edit{
    background-color: lightslategrey;
    margin-right: 2px;
    border-radius: 5px;
}
.btn_edit:hover{
    background-color: yellow; 
}
.btn_delete{
    background-color: lightslategrey;
    border-radius: 5px;
}
.btn_delete:hover{
    background-color: red; 
}

</style>