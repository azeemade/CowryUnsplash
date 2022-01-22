<template>
    <div class="search">
        <i class="bi bi-search"></i>
        <input type="text" class="search-bar" placeholder="Search for photo" v-model="query">
    </div>
</template>
<script>
export default {
    name: "SearchBar",
    data(){
        return{
            query: ""
        }
    }
}
</script>
<style>
    .search-bar{
        width: 100%;
        border: none;
        border-radius: 0.25rem;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        transition: 0.3s;
        height: calc(1.5em + 0.75rem + 2px);
        font-size: 1rem;
        line-height: 1.5;
    }
    .search-bar:focus {
        border-color: #2c3e5087;
        box-shadow: 0 0 4px 0 #2c3e5091;
    }
    .search-bar::placeholder {
        color: #768296;
    }
    .search .search-bar {
        padding-left: 40px;
    }

    .search {
        position: relative;
    }

    .search i {
        position: absolute;
        left: 0;
        top: 8px;
        padding: 11px 8px;
        color: #aaa;
        transition: 0.3s;
    }

    .search .search-bar:focus + i {
        color: #2c3e50;
    }
</style>