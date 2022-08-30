<template>
<div class="aboutmeCon p-8 grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 p-5 m-2 font-bold">
        <div class="flex">
            <div  class="working"><number v-if="$store.state.swiperindex == 1" :from="0" :to="11" :duration="2"></number></div>
            <div>+</div>
        </div>
        
        <div class="subtext">Month<br/>Experience<br/>Work</div>
    </div>
    <div class="font-bold text-3xl col-span-2 p-2">
        <div>안녕하세요! Front-End Web</div>
        <div class="mt-2">개발자 이재창 입니다.</div>
    </div>
    <div class="row-span-2 col-span-2">
        <div class="flex p-2 between">
            <div>
                <div class="mb-11">
                    <div class="aboutIntro mb-3">꿈에는 지름길은 없다</div>
                    <div class="aboutContent">30살에 늦은 나이로 개발을 입문하엿지만 어제보다 조금 성장하자는 목표를 가지고 노력하고 있습니다. </div>
                </div>
                <div>
                    <div class="aboutIntro mb-3">희망사항</div>
                    <div class="aboutContent">좋은 개발 문화를 가진 팀에 팀원이 되고 싶습니다.<br/>
                    멋진 CTO, 멋진 선배님을 만나서 그들의 모든 것을 존경하고 따르고 싶습니다.<br/>
                    실패의 가능성이 있는 목표, 성과를 내야 하는 팀에 기여 하고 싶습니다.
                    </div>
                </div>
            </div>
            <div>
                <div class="mb-11">
                    <div class="aboutIntro mb-3">Career changes</div>
                    <div class="aboutContent">진로의 고민 없이 요리사라는 직장을 가졌지만 내가 좋아하는 것과 흥미롭게 생각하는 것에 대한 생각이 많아져 
                        개발자로 진로를 바꾸게 되었습니다.
                    </div>
                </div>
                <div>
                    <div class="aboutIntro mb-3">개발태도</div>
                    <div class="aboutContent">고집이 없고, 타인의 의견을 수렴합니다<br/>
                        개발 리더의 가르침에 100% 흡수하고 빠르게 성장합니다<br/>
                       고객의 니즈를 잘 파악하고 고객 중심적 사고와 감성으로 사용자를 이해합니다 </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

</template>

<script>

export default {
    data(){
        return{
            Working: 10
        }
    }

}
</script>

<style>
.between{
    justify-content: space-between;
}
.aboutContent{
    color: rgb(0,0,0,0.5);
    width: 70%;
}
</style>