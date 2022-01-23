<template>
    <Photo v-if="photos.length != 0" :photos="photos"/>
    <Placeholder v-else />
</template>
<script>
import Placeholder from "../components/Placeholder.vue";
import PhotoService from "../services/photo.service";
import Photo from "../components/Photo.vue";
export default {
    name: "Index",
    components: { Placeholder, Photo },
    data(){
        return{
            photos: []
        }
    },
    beforeMount(){
        PhotoService.listPhotos()
        .then(response => {
            this.photos = response.data.results
        })
    }
}
</script>
<style>

</style>