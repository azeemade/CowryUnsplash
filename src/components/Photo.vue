<template>
    <div class="photo">
        <!-- <div class="photo-card" v-for="photo, index in photos" :key="index">
            <img :src="photo.urls.small" class="photo-card-img">
            <div class="photo-text">
                <h5>{{photo.user.first_name}} {{photo.user.last_name}}</h5>
                <p>{{photo.user.location}}</p>
            </div> -->

            <div class="photo-column" v-for="i,index in 3" :key="index">
                <div class="photo-contents" v-for="photo, index in fooPhotos.photo" :key="index">
                    <div class="photo-item">
                        <img :src="photo.urls.small" class="photo-card-img">
                        <div class="photo-text">
                            <h5>{{photo.user.first_name}} {{photo.user.last_name}}</h5>
                            <p>{{photo.user.location}}</p>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    name: 'Photo',
    props: {photos: Array},
    computed:{
        fooPhotos(){
            const Photos= {
                photo1: [],
                photo2:[],
                photo3: []
            };

            this.photos.forEach(photo => {
                if (Photos.photo1.length <= 2){
                    Photos.photo1.push(photo)
                }
                else if(Photos.photo2.length <= 2){
                    Photos.photo2.push(photo)
                }
                else {
                    Photos.photo3.push(photo)
                }
            })

            return Photos
        }
    }
}
</script>
<style lang="scss">
    .photo {
        display: flex;
        flex-wrap: wrap;
    }

    .photo-card {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    // .photo {
    //     display: grid;
    //     grid-template-columns: repeat(12, auto);
    //     grid-gap: 12px;
    // }

    // .photo-card {
    //     grid-column: span 4;
    //     position: relative;
    // }

    // .photo-card-img{
    //     opacity: 0.75;
    // }

    // .photo-text{
    //     bottom: 5%;
    //     left: 10%;
    //     position: absolute;
    //     color: white;
    // }


    .photo{
        display: flex;
        flex-wrap: wrap;
        padding: 20px 160px;

        &-column{
            flex: 25%;
            padding-right: 60px;

            &:nth-child(1){
                .photo-contents:nth-child(1){
                    margin-top: 0px;
                } 
            }

            &:nth-child(2){
                .photo-contents:nth-child(1){
                    margin-top: 0px;
                } 
            }

            &:nth-child(3){
                .photo-contents:nth-child(1){
                    margin-top: 0px;
                } 
            }
        }
    
        &-contents{
            margin-top: 40px;
            vertical-align: middle;
            background: #f5f5f5;
            position: relative;
            border-radius: 8px;
        }

        &-item{
            position: absolute;
            bottom: 10%;
            left: 5%;
            width: 100%;

            & div{
                background: #e6e6e6;
                height: 20px;

                animation-duration: 1.7s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                animation-name: photoAnimate;
                background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
                background-size: 1300px;
            }

            &-1{
                width: 50%;
                margin-bottom: 12px;

                &:after,
                &:before {
                    width: inherit;
                    height: inherit;
                    content: '';
                }
            }

            &-2{
                width: 25%;

                &:after,
                &:before {
                    width: inherit;
                    height: inherit;
                    content: '';
                    position: absolute;
                }
            }
        }
    }
</style>