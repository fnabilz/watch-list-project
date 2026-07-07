<script setup>
// javaScript

import { Mail, Lock } from '@lucide/vue';
import { RouterLink } from 'vue-router';

</script>


<template>
    <!-- elements -->
    <div class="main-container">
        <div class="login-card">

            <h1>Welcome back</h1>

            <form @submit.prevent=""  class="item-container">
                <div class="item-div">
                    <Mail class="icon"/>
                    <input id="email" type="email" v-model="email" placeholder="Email" required/>
                </div>
                <div class="item-div">
                    <Lock class="icon"/>
                    <input id="password" :type="showPassword ? 'text' : 'password'"  v-model="password"  placeholder="Password" required/>
                </div>

                <RouterLink class="router-link" to="/home">
                    <button>Login</button>
                </RouterLink>

            </form>

            <p class="register-link">
                Don't have an account? <router-link to="/register">Sign up</router-link>
            </p>


        </div>
    </div>

</template>


<style scoped>
/* styling */
* {
    font-family: 'Roboto';
}

.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-blue);
}

.login-card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 30rem;
    height: 30rem;
    border-radius: 1.5rem;
    background-color: white;
    box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    padding: 3rem 0 0 0;
}

.item-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 16rem;
    gap: 2.5rem;
    padding: 0 2rem 0 2rem;
}

.item-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 2.5rem;
}

.icon {
    color: #6D8196;
    width: 2rem;
    height: 2rem;
}

input {
    font-weight: 400;
    font-style: normal;
    border-width: 0;
    border-radius: .5rem;
    background-color: whitesmoke;
    width: 100%;
    height: 3rem;
    padding: 0 1rem 0 1rem;
}

input:focus {
  outline: none;
}

.router-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
}

button {
    font-weight: 600;
    color: white;
    background-color: cornflowerblue;
    border-radius: .5rem;
    border-width: 0;
    padding: .7rem;
    width: 24rem;
}

button:hover {
   opacity: 80%;
}

.register-link {
    display: flex;
    gap: .5rem;
    justify-content: center;
    font-size: 1rem;
    padding: 1.5rem 0 0 0;
    color: #6D8196;
}




</style>
