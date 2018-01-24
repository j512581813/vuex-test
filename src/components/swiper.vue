<template>
    <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    data(){
        return{
           swiperOption: {
            
           pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 30
            }
            
        }       
    }
};
// export default {
//     name: 'carrousel',
//     data() {
//       return {
//         swiperOption: {
//           setWrapperSize :true,
//           pagination : '.swiper-pagination',
//           paginationClickable :true,
//           mousewheelControl : true,
//           observeParents:true,
//         },
//         swiperSlides: [1, 2, 3, 4, 5]
//       }
//     },
//     mounted() {
//       setInterval(() => {
//         console.log('simulate async data')
//         let swiperSlides = this.swiperSlides
//         if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
//       }, 3000)
//     }
//   }
</script>

<style lang="scss" scoped>
@import '../base/css/base.scss';
    .swiper-box {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        .swiper-item {
            height: 20rem;
            background: url() no-repeat center/cover;
             &:nth-of-type(1){
             @include dpr-img("../assets/","vue"); 
           } 
            &:nth-of-type(2){
                @include dpr-img("../assets/","swiper1");
            }
            &:nth-of-type(3){
                @include dpr-img("../assets/","swiper2");
            }
            &:nth-of-type(4){
                @include dpr-img("../assets/","swiper3");
            }  
        }      
    }
    
</style>