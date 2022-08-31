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
            <button @click="googleform" class=" hover:bg-slate-900  text-gray-100 font-semibold py-2 px-4 border border-white-400 rounded shadow" type="button" data-modal-toggle="small-modal">하시고 싶은 말씀이 있으신가요?</button>
        </div>
        <modal v-if="$store.state.modal"></modal>
    </div>

</div>
</template>

<script>
    import modal from '../views/modal.vue'
export default {
    components:{
     modal
    },
    methods:{
        modaltrue(){
            this.$store.commit('modalOpen',!this.$store.state.modal)
        },
        googleform(){
            window.open('https://forms.gle/gmz3p43qNixxX9w7A',"_blank","width=500, height=700")
        }
    }
}
</script>

<style>


</style>