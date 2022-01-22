<template>
    <div>
        <Placeholder />
    </div>
</template>
<script>
import Placeholder from "../components/Placeholder.vue";
import PhotoService from "../services/photo/service";
export default {
    name: "Index",
    components: { Placeholder },
    data(){
        return{
            photos: []
        }
    },
    beforeMount(){
        PhotoService.listPhotos()
        .then(response => {
            this.photos = response.data
        })
    }
}
</script>
<style>

</style>