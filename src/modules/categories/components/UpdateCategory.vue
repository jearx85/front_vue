<template>
    <div class="container">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label" >Nombre de la categoria</label>
                    <input type="text" 
                    class="form-control" id="name" required name = "name" v-model="categories.name" />
                
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Descripción</label>
                    <textarea type="text" class="form-control" id="description" v-model = "categories.description"></textarea>
                </div>
                <button type="submit" class="btn" @click="updateCategory">Actualizar</button>
            </form>
        </div>

</template>

<script>
    export default {
        props: ['id'],
        data(){
                return{
                    categories:{
                    name: "",
                    description: ""
                    }
                }
            },
    
            async created(){
                const options = {
                    method: "GET"
                }

                const response = await fetch("http://127.0.0.1:8000/api/category/" + this.$route.params.id+ "/edit", options);
                //console.log(this.$route.params.id);
                const {data: categories} = await response.json();

                this.categories = categories;
                console.log("created");
            },
            methods:{
               async updateCategory(e){
                e.preventDefault();
                const options = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(this.categories)
                }
               
                const response = await fetch("http://127.0.0.1:8000/api/category/" + this.$route.params.id+ "/update",options);
                const dataCategory = await response.json();
                //console.log(dataCategory);

                this.categories = dataCategory;
                alert("Categoria actualizada")
                console.log("actualizado")
                //window.location.href="/"
                this.$router.push({name: 'home'});
            }

            }
            
        }

</script>

<style scoped>
.container {
    width: 50%;
    margin-top: 15px;
    align-items: stretch;
    padding: 15px;
    border: 1px black;
}

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

</style>