<template>
    <h1 class = "title">Gestión de categorias</h1>
    <div class="container">
        
        <table class="table table-hover table-responsive-lg">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Creado</th>
                <th scope="col">Actualizado</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in categories" :key="cat.id" >
                <td v-bind:id="id">{{ cat.id }}</td>
                <td>{{ cat.name }}</td>
                <td>{{ cat.description }}</td>
                <td>{{ cat.created_at }}</td>
                <td>{{ cat.updated_at }}</td>
                <td><router-link :to = "cat.id + '/update/category'">
                    <button class="btn_edit">Editar</button>
                    </router-link>
                    <button class = "btn_delete" @click="deleteCategory(cat.id)">Eliminar</button>
                </td>
                </tr>
                
            </tbody>
        </table>
        <router-link to = '/create/category'>
        <button type="button" class="btn">Nueva categoria</button>
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

            const response = await fetch("http://127.0.0.1:8000/api/category/all", options);
            const data = await response.json();

            console.log(data);
            

            this.categories = data.data;
        },
        data(){
            return{
                categories: []
            }
        },
        methods:{
            async deleteCategory(id){
                //console.log(id);
                const options = {
                method: "DELETE",
                headers: { 
                    'Content-Type': 'application/json',
                },
            }

                const response = await fetch("http://127.0.0.1:8000/api/category/"+ id +"/destroy", options);
                const data = await response.json();
                // console.log(data.data.newList);
                alert("categoria eliminada")
                this.categories = data.data;
            
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