<template>
<div class="contactMe">
    <div class="contactMeCon">
        <img src="../assets/contactME.jpg" alt="">
    </div>
    <div class="contactMeSub">
        <div class="subject mb-3">Contact Me</div>
        <div class="sub_con">
            <p>다양한 의견 남겨주세요 </p>
            <p>항상 소중히 하고 감사히 듣겟습니다.</p>
        </div>
        <div class="p-3 m-3"></div>
        <div>
            <button class=" hover:bg-slate-900  text-gray-100 font-semibold py-2 px-4 border border-white-400 rounded shadow">하시고 싶은 말씀이 있으신가요?</button>
        </div>
    </div>
    
    
    
</div>
</template>

<script>
export default {

}
</script>

<style>
.contactMeCon{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.contactMeSub{
    position: absolute;
    left: 250px;
    top: 220px;
}
.contactMe .subject{
    color: white;
    font-size: 3rem;
    font-weight: bold;
}
.contactMe .sub_con{
    color: rgb(255, 255, 255,0.5);
    font-size: 1rem;
}

</style>