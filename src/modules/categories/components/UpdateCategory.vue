<template>
    <div class="container">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label" >Nombre de la categoria</label>
                    <input type="text" 
                    class="form-control" id="name" required name = "name" :name="categories.name" />
                
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
            async created(){
                const options = {
                    method: "GET"
                }

                const response = await fetch("http://127.0.0.1:8000/api/category/" + this.id + "/edit", options);
                const data = await response.json();

               console.log(data);
                let editCategoryData = {
                    name: data.name,
                    description: data.description
                }

                this.categories = editCategoryData;
                console.log(editCategoryData);
            },
            data(){
                return{
                    categories:{
                    name: "",
                    description: ""
                    }
                }
            },
        
            methods:{
                async updateCategory(e){
                    e.preventDefault();
                    const options = {
                    method: "PUT",
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    body:  JSON.stringify(this.category)
                }

                    const response = await fetch("http://127.0.0.1:8000/api/category/"+ this.id +"/update", options);
                    const data = await response.json();

                    // console.log(data);
                    alert('categoria actualizada')

                    this.$router.replace({path: '/'});
                    //this.categories = data.data;

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