<template>
    <div class="flex" v-if="$route.path == '/'">
        <div class="search">
            <i class="bi bi-search"></i>
            <input type="text" class="search-bar" placeholder="Search for photo" v-model="search">
        </div>
        <button role="submit" class="button" @click="Search" v-if="search != ''">Search</button>
    </div>
    <div v-else>
        <h4 class="search-text">Searching for <span class="search-item">"{{$store.state.query}}"</span></h4>
    </div>
</template>
<script>
export default {
    name: "SearchBar",
    data(){
        return{
            search: ""
        }
    },
    methods: {
        Search(){
            this.$store.commit('add_query', this.search)
            this.$router.push(`/search?query=${this.search}`)
        }
    }
}
</script>
<style>
    .search-text{
        color: #253858;
        font-size: 1.5rem;
        margin: 0;
    }
    .search-item{
        color: #6d7b91;
    }
    .flex {
        display: flex;
        align-items: baseline;
    }
    .button {
        display: inline-block;
        font-weight: 400;
        color: white;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: #2c3e5091;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        height: calc(1.5em + 1rem + 2px);
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .search-bar{
        width: 100%;
        border: none;
        border-radius: 8px;
        margin: 8px 0;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
        transition: 0.3s;
        height: calc(1.5em + 1rem + 2px);
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
        width: 100%;
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