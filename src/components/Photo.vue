<template>
    <div class="photo">
        <div class="photo-column" v-for="item, index in 3" :key="index">
            <div class="photo-contents" v-for="_item, index in 2" :key="index">
                <div class="photo-item">
                    <div class="photo-card">
                        <div class="photo-text">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'photo'
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
            
    @keyframes photoAnimate {
        0%{ background-position: -283px 0; }
        100%{ background-position: 283px 0; }
    }
</style>