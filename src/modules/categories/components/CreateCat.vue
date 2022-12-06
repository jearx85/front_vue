<template>
    <h1>Registre nueva categoria</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre de la categoria</label>
                <input type="text" 
                class="form-control" id="name" required name = "name" v-model = "category.name">
               
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descripción</label>
                <textarea type="text" class="form-control" id="description" v-model = "category.description"></textarea>
            </div>
            <button type="submit" class="btn" @click="newCategory">Crear</button>
        </form>
    </div>
</template>

<script>
 export default{
    data(){
        return{
            category:{
                name:"", 
                description:""
            }
        }
    },
    methods:{
        async newCategory(){
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json"},
            body:  JSON.stringify(this.category)
            }
            const response = await fetch("http://127.0.0.1:8000/api/category/store", options);
            const data = await response.json();
            console.log(data);

            this.category = data.data;
            this.$router.replace({path: '/'});
            alert("categoria creada con exito");
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