<template>
  <div class="skills text-white">
    <div class="skillsbackground">
        <img src="../assets/star.jpg" alt=""/>
    </div>
    <div class="text-white font-extrabold text-6xl relative skillcon">
        Skills
    </div>
    <div class="grid grid-cols-2 gap-5 w-8/12 justify-items-center skillSubCon">
      <div><img class="object-scale-down w-14 h-14" src="../assets/vue.png" alt=""></div>
      <div>필요한 UI를 구현 할수 있고 라이브러리를 통해 컴포넌트를 커스텀 할수 있습니다</div>
      <div class="flex"><img class="object-scale-down w-14 h-14 mr-2 rounded-sm" src="../assets/tailwind.jpeg" alt="">
      <img class="object-scale-down w-14 h-14 rounded-sm" src="../assets/bootstrap.png" alt=""></div>
      <div>Grid System과 Custom css를 추가하여 기본 스타일을 추가해 원하는 스타일을 적용시킬수 있습니다.</div>
      <div><img class="object-scale-down w-14 h-14 rounded-sm" src="../assets/js.png" alt=""></div>
      <div>es6 문법을 이해하고 있고 객체와 메소드 중심의 개발보다 함수형 프로그래밍을 좋아합니다.</div>
      <div><img class="object-scale-down w-14 h-14 rounded-sm" src="../assets/php.png" alt=""></div>
      <div>데이터 베이스를 활용할 수 있고 JQuery를 사용하여 동적인 페이지를 작성할수 있습니다</div>
      <div><img class="object-scale-down w-14 h-14 rounded-sm" src="../assets/firebase.png" alt=""></div>
      <div>firebase를 사용하여 보다 쉽게 데이터를 관리하거나 사용자를 생성하거나 배포를 할수 있습니다. </div>
      <div><img class="object-scale-down w-14 h-14 rounded-sm" src="../assets/aws_ec2.svg" alt=""></div>
      <div>amazon-linux-extras를 사용해 php를 설치해 배포하고 관리 할수있습니다. 커스텀 도메인과 SSL를 연결할 수 있습니다</div>
    </div>
  </div>
</template>

<script>

export default {
 components:{
 }

}
</script>

<style>    
.skills .skillsbackground{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    }
  .skills .skillcon{
        left:5rem;
  }
  .skillSubCon{
    position: relative;
    left:100px;
  }
  

</style>