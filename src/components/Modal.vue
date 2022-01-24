<template>
    <div class="mask active" role="dialog"></div>
    <div class="modal" role="alert">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" role="button" @click="closeModal">X</button>
                </div>
                <div class="modal-body">
                    <img :src="photo.urls.full" class="card-img">
                    <div class="footer-text">
                        <h5>{{photo.user.first_name}} {{photo.user.last_name}}</h5>
                        <p>{{photo.user.location}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Modal",
    props: {photo: Object},
    methods: {
        closeModal(){
            this.$store.commit('remove_id')
        }
    }
}
</script>
<style lang="scss" scoped>
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(52, 73, 94, 0.8);
        z-index: 50;
        visibility: hidden;
        opacity: 0.5;
        transition: 0.7s;
    }

// Modal

    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
        z-index: 100;
        overflow: hidden;
        transition: 0.5s ease-out;
        transform: translateY(45px);
    }
    .modal-dialog::before {
        display: block;
        height: calc(100vh - 3.5rem);
        content: "";
    }

    .modal-dialog {
        position: relative;
        width: auto;
        margin: 0.5rem;
        pointer-events: none;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        min-height: calc(100% - 3.5rem);
    }

    .modal-content {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        align-items: center;
        width: 100%;
        pointer-events: auto;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.3rem;
        outline: 0;
    }

    .modal-body {
        position: relative;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1rem 0;
        justify-content: center;
        display: grid;
        padding-bottom: 0px;
    }

    .footer-text {
        background: white;
        color: #364765;
        border-radius: 0px 0px 12px 12px;
    }

    .modal-header{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 240px;
        padding-top: 36px;
    }

    .footer-text {
        padding: 1rem;
    }

    .card-img {
        border-radius: 12px 12px 0px 0px    !important;
        height: 400px;
    }

    .active{
        visibility: visible;
        opacity: 1;
    }


    .active + .modal{
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }
</style>