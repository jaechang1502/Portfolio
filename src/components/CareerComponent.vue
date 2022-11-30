<template>
  <div class="mt-8">
    <div class="absolute font-extrabold sm:text-5xl xxs:text-2xl career">
      Career
    </div>
    <div>
      <div
        class="sm:text-3xl xxs:text-xl sm:p-6 xxs:p-3 sm:mb-4 xxs:mb-5 drop-shadow-xl bg-white-trasperate rounded-lg"
      >
        <div class="flex">
          <div class="font-extrabold">(주)스튜디오질풍</div>
          <div class="mx-2">|</div>
          <div>웹개발자</div>
        </div>
        <div class="text-base mt-2 text-slate-500">
          2021년 10월 - 2022년 8월 | 10개월 근무 | PHP, Vue , AWS EC2,S3
        </div>
        <div class="text-base mt-2">
          웹툰 모델 판매사이트와 이미지에디터사이트를 기획, 서버, 웹사이트,
          입점자관리서비스를 개발 했습니다.
        </div>
        <a
          class="text-base text-cyan-600 mt-2"
          href="https://2eeum.com"
          target="_blank"
          >zeeum</a
        >
        &nbsp;
        <a
          class="text-base text-cyan-600 mt-2"
          href="https://ketchuptoon.com/"
          target="_blank"
          >ketchuptoon</a
        >
      </div>
      <div
        class="sm:text-3xl xxs:text-xl sm:p-6 xxs:p-3 sm:mb-4 xxs:mb-5 drop-shadow-xl bg-white-trasperate rounded-lg"
      >
        <div class="flex">
          <div class="font-extrabold">메타제로</div>
          <div class="mx-2">|</div>
          <div>FrontEnd Dev</div>
        </div>
        <div class="text-base mt-2 text-slate-500">
          2022년 9월 - 2022년 11월 | 3개월 근무 | React
        </div>
        <div class="text-base mt-2">
          블록체인 컨트렉트 Defi서비스 사이트 프론트 부분을 담당 개발
          하였습니다.
        </div>
        <a
          class="text-base text-cyan-600 mt-2"
          href="https://plusfi.net/"
          target="_blank"
          >plusFi</a
        >
      </div>
      <div
        class="sm:text-3xl xxs:text-xl sm:p-6 xxs:p-3 sm:mb-4 xxs:mb-2 drop-shadow-xl bg-white-trasperate rounded-lg"
      >
        <div class="flex">
          <div class="font-extrabold">ChangMAN Dev</div>
          <div class="mx-2">|</div>
          <div>대표</div>
        </div>
        <div class="text-base mt-2 text-slate-500">2022년 10월 - 현재</div>
        <div class="text-base mt-2">
          취미생활을 웹사이트로 만들어 보는 중입니다
        </div>
      </div>
    </div>
    <Transition v-if="$store.state.swiperindex == 3" name="slide-fade">
      <img
        class="absolute eclipse w-3/6 -z-50"
        src="../assets/elipse-home-slide.png"
        alt=""
      />
    </Transition>
  </div>
</template>

<script>
export default {};
</script>no

<style>
.bg-white-trasperate {
  background-color: rgb(255, 255, 255, 0.5);
}
.eclipse {
  top: 400px;
  left: -300px;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
