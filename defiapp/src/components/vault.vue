<template>
<div class="container" style="height: 70vh; margin-top: 10vh; ">
          <div class="top-bar" >
              <h4 class="top-title">Your Vaults</h4>
              <div class="top-buttons">
                <button class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 search-button " style="margin-right: 20px">
                    <div class="mr-2 " >Search</div>
                </button>
                <button class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 search-button " >
                    <div class="mr-2 " @click="create" >Create</div>
                </button>
                
              </div>
            
          </div>

          <!-- <div class=" " style=" background: hsl(223, 16%, 17%); padding-bottom: 20px;">
            <div class="row">
                <div class="col-2"></div>
              <div class="col-7"><input type="text" class="form-control" style="height: 40px; border-radius: 20px;" placeholder="Vault ID"></div>
              <div class="col-3"> 
                  <button class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 search-button" >
                <div class="mr-2 " >Go</div>
            </button></div>
            </div>
           
        </div> -->
          <div class="buttom-container">
        
            
       </div>  
      </div>
</template>


<script>
export default {
  data(){
      return {
        dialog : false,
          logo : require('@/assets/image.png')
      }
  },
   computed: {
    user : function(){
     return this.$store.state.currentUser.user;
   },
   
    },
  mounted(){
       
  },
  methods : {
     async create(){

        await window.tokenContract.methods.createVault().send({from: this.user.address}).then(function(result ){
          let address = result.events.CreateVault.returnValues.creator;
        let vaultIDs =  localStorage.getItem(address) != null ? JSON.parse(localStorage.getItem(address))  : []
        console.log(result.events.CreateVault.returnValues.vaultID); 
        vaultIDs.push(result.events.CreateVault.returnValues.vaultID)
         localStorage.setItem(address,JSON.stringify(vaultIDs));
    })
        //  this.$store.dispatch("vault/createVault" ).then(
        //    response => {
        //      console.log(response);
        //    }
        //  ).catch(error => {
        //    console.log(error);
        //  })
      }
  }
}
</script>