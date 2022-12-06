import { createRouter, createWebHashHistory } from 'vue-router';
import CompStart from '../src/modules/categories/components/CompStart.vue';
import Post from '../src/modules/posts/components/post.vue';
import CreateCat from '../src/modules/categories/components/CreateCat.vue';
import UpdateCategory from '../src/modules/categories/components/UpdateCategory.vue';
import CreatePost from '../src/modules/posts/components/CreatePost.vue';
import UpdatePost from '../src/modules/posts/components/UpdatePost.vue';


const routes = [
  { path: '/', component: CompStart },
  { path: '/categories', component: CompStart },
  { path: '/create/category', component: CreateCat },
  { path: '/:id/update/category', component: UpdateCategory, name: 'Editar'},

  { path: '/posts', component: Post },
  { path: '/create/posts', component: CreatePost },
  { path: '/update/posts', component: UpdatePost, name: 'EditPost'}

]

const router = createRouter({

  history: createWebHashHistory(),
  routes, 
})

export default router;