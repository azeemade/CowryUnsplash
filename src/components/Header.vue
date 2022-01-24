<template>
    <div class="header-items">
        <SearchBar />
    </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
export default {
    name: "Header",
    components: { SearchBar }
}
</script>
<style>
    .header-items{
        background-color: rgb(221 226 233);
        padding: 100px 120px;
    }
</style>