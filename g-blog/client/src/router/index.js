import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login.vue'
import HomePage from '@/page/HomePage.vue'
import Blog from '@/page/Blog/Blog.vue'
import Article from '@/page/Article/Article.vue'
import Project from '@/page/Project/Project.vue'
import ProjectView from '@/page/Project/ProjectView.vue'
import Resume from '@/page/Resume/Resume.vue'
import ChatRoom from '@/page/ChatRoom/ChatRoom.vue'
import ErrorPage from '@/page/ErrorPage.vue'

import vuex from '../store/index'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/HomePage',
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/Blog/Article',
      name: 'Article',
      component: Article,
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Project/ProjectView',
      name: 'ProjectView',
      component: ProjectView
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/ChatRoom',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/ErrorPage',
      name: 'ErrorPage',
      component: ErrorPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    vuex.state.main.nav = to.name;
    next();
  } else {
    vuex.state.main.nav = from.name;
    next(from.path);
  }
});

export default router