<template>
    <Placeholder v-if="photos.length == 0" />
    <Photo v-else :photos="photos"/>
</template>
<script>
import Placeholder from "../components/Placeholder.vue";
import PhotoService from "../services/photo.service";
import Photo from "../components/Photo.vue";
export default {
    name: "Search",
    components: { Placeholder, Photo },
    data(){
        return{
            photos: []
        }
    },
    beforeMount(){
        PhotoService.searchPhoto(this.$route.query.query)
        .then(response => {
            this.photos = response.data.results
        })
    }
}
</script>