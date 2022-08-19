<template>
<div class="aboutmeCon p-8 grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 p-5 m-2 font-bold">
        <div class="flex">
            <div  class="working"><number :from="0" :to="8" :duration="2"></number></div>
        </div>
        
        <div class="subtext">Month<br/>Experience<br/>Work</div>
    </div>
    <div class="font-bold text-3xl col-span-2">
        <div>안녕하세요! Front-End Web</div>
        <div class="ml-2 mt-2">개발자 이재창 입니다.</div>
    </div>
    <div class="row-span-2 col-span-2">gdgd</div>
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

</style>