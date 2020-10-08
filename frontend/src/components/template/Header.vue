<template>
    <header class="header">
        <h1 class="title">
            <router-link to="/">{{ title }}</router-link>
        </h1>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        title: String,       
    },
}      
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #f39158, #d2c8d8);

        display: flex;
        justify-content: center;
        align-items: center;
    } 

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }

    .title a:hover {
        color: #FFF;
        text-decoration: none;
    } 

    
</style>