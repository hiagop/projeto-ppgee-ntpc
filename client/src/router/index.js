import Vue from 'vue'
import Router from 'vue-router'
import QuestionArea from '../components/QuestionArea'
import LoginPage from '../components/LoginPage'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/questions',
            name: 'Questions',
            component: QuestionArea
        }
    ]
})