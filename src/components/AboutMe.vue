<template>
<div class="aboutmeCon p-8 grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 p-5 m-2 font-bold">
        <div class="flex">
            <div  class="working"><number :from="0" :to="8" :duration="2"></number></div>
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
                <div class="mb-3">
                    <div class="aboutIntro mb-3">Eager Beaver </div>
                    <div class="aboutContent">30살에 늦은 나이로 개발을 입문하엿지만 어제보다 조금 성장하자는 목표를 가지고 노력하고 있습니다. </div>
                </div>
                <div>
                    <div class="aboutIntro">12</div>
                    <div></div>
                </div>
            </div>
            <div>
                <div class="mb-3">
                    <div class="aboutIntro mb-3">Career changes</div>
                    <div class="aboutContent"></div>
                </div>
                <div>
                    <div class="aboutIntro mb-3">21uo</div>
                    <div></div>
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
    width: 50%;
}
</style>