<template>
    <div class="photo">
        <div class="photo-column">
            <a class="photo-contents" v-for="photo, index in fooPhotos.photo1" :key="index" aria-haspopup="true"  @click="showModal(photo.id)">
                <img :src="photo.urls.small" class="card-img">
                <div class="photo-text">
                    <h5>{{photo.user.first_name}} {{photo.user.last_name}}</h5>
                    <p>{{photo.user.location}}</p>
                </div>
                <Modal :photo="photo" v-if="id == photo.id"/>
            </a>
        </div>
        <div class="photo-column">
            <a class="photo-contents" v-for="photo, index in fooPhotos.photo2" :key="index" aria-haspopup="true" @click="showModal(photo.id)">
                <img :src="photo.urls.small" class="card-img">
                <div class="photo-text">
                    <h5>{{photo.user.first_name}} {{photo.user.last_name}}</h5>
                    <p>{{photo.user.location}}</p>
                </div>
                <Modal :photo="photo" v-if="id == photo.id"/>
            </a>
        </div>
        <div class="photo-column">
            <a class="photo-contents" v-for="photo, index in fooPhotos.photo3" :key="index" aria-haspopup="true" @click="showModal(photo.id)">
                <img :src="photo.urls.small" class="card-img">
                <div class="photo-text">
                    <h5>{{photo.user.first_name}} {{photo.user.last_name}}</h5>
                    <p>{{photo.user.location}}</p>
                </div>
                <Modal :photo="photo" v-if="id == photo.id"/>
            </a>
        </div>
    </div>
</template>
<script>
import Modal from "./Modal.vue";
import {mapGetters} from 'vuex'
export default {
    name: "Photo",
    props: { photos: Array },
    methods:{
        showModal(index){
            this.$store.commit('add_id', index)
        }
    },
    computed: {
        ...mapGetters(['id']),

        fooPhotos() {
            const Photos = {
                photo1: [],
                photo2: [],
                photo3: []
            };
            this.photos.forEach(photo => {
                if (Photos.photo1.length <= 2) {
                    Photos.photo1.push(photo);
                }
                else if (Photos.photo2.length <= 2) {
                    Photos.photo2.push(photo);
                }
                else {
                    Photos.photo3.push(photo);
                }
            });
            return Photos;
        }
    },
    components: { Modal }
}
</script>
<style lang="scss">
    .photo{
        display: flex;
        flex-wrap: wrap;
        padding: 20px 160px;

        &-column{
            flex: 25%;
            padding-right: 60px;

            &:last-child {
                padding-right: 0;
            }
        }

        &-contents{
            position: relative;
            margin-top: 40px;
            vertical-align: middle;

            &:nth-child(1){
                margin-top: 0px;
            }

            .card-img {
                background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
                width: 100%;
                border-radius: 12px;
            }
        }

        &-text{
            position: absolute;
            bottom: 10%;
            left: 5%;
            color: white;

            h5{
                margin-bottom: 0.5rem;
            }

            p{
                margin: 0;
                margin-bottom: 0.5rem;
                font-size: 0.8rem;
            }
        }
    }
</style>