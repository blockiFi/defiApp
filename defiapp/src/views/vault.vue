<template>
<div>
<topmenu></topmenu>

<vaultdetails :id="$route.params.id"></vaultdetails>
</div>
</template>

<script>

export default {
 props: ['id'], 
 data(){
     return {

     }
 },
 mounted(){
    console.log(this.$route.params.id);
 }
}
</script>