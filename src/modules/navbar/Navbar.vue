<script>

</script>

<template>

<nav class="navbar navbar-expand-lg" id="nav">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to = '/categories' class="nav-link">Categories</router-link>
        </li>
        <li class="nav-item">
          <router-link to = '/posts' class="nav-link">Post</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
    <routerView></routerView>
</div>

</template>

<style scoped>
  #nav{
    background-color: lightslategrey;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }
</style>