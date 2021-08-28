<template>
  <div class="row col-md-6 offset-md-3" style="margin-top:40px">
    <div class="relative bg-dm-tertiary" style="border-radius: 10px; background-image: url(&quot;&quot;); background-repeat: no-repeat; background-size: contain; background-position: center bottom;">
      <div>
          <div class="flex justify-between items-center bg-dm-secondary flex items-center rounded-t px-2 py-4 sm:px-8 sm:py-6">
              <div class="grid grid-cols-2 md:grid-cols-6 gap-2 w-full">
                  <div class="mb-4 md:flex md:mb-0 items-center col-span-4 md:col-span-4">
                      <div class="flex flex-row items-center space-x-2 text-lg whitespace-nowrap">
                          <span style="color:white"> Vault monitor</span>
                          
                          
                      </div>
                  </div>
                 <p>Showing vaults close to liquidation</p>
              </div>
             
          </div>
          <div class="px-2 py-4 sm:p-8">
             
              <div class="grid grid-cols-4 pb-4 px-4 text-sm  text-secondary "  >
                  <div>Vault ID + Ratio</div>
                  <div class="flex items-center justify-end">Collateral </div>
                  <div class="flex items-center justify-end">Debt </div>
              </div>
  
              <div class="flex-col space-y-2">
                <div class="rounded bg-dm-secondary" v-for="vault  in vaults" :key="vault.id" >
                  <div v-if="parseFloat(vault.ratio).toFixed(2) <  200" class="grid grid-cols-4 py-4 px-4 cursor-pointer select-none rounded text-sm" @click="expandVault(vault.id)">
                      <div class="flex items-center">
                          <div class="mr-4" style="color:white">Vault #{{vault.id}}  <span class="alert alert-warning">{{parseFloat(vault.ratio).toFixed(2)}} %</span></div>
                      </div>
                      <div class="flex justify-end items-center min-w-0">
                          <span class="text-white text-right overflow-ellipsis overflow-hidden">{{parseFloat(vault.vaultCollateral).toFixed(2) }}</span>
                      </div>
                      
                      <div class="flex justify-end items-center">
                        <span class="text-white text-right overflow-ellipsis overflow-hidden">{{parseFloat(vault.debt).toFixed(2) }}</span>
                  </div>
              </div>
             
              </div>
              </div>
              <!-- <div style="color:white;background: #0f1416 ; padding :15px; border-radius: 20px ; margin: 10px;" class="grid grid-cols-4 pb-4 px-4 text-sm  " v-for="vault  in vaults" :key="vault.id"  @click="openVault(vault.id)">
                <div>vault #{{vault.id}}</div>
                <div class="flex items-center justify-end">{{parseFloat(vault.vaultCollateral).toFixed(2) }} </div>
                <div class="flex items-center justify-end">{{parseFloat(vault.debt).toFixed(2) }}</div>
                <div class="flex items-center justify-end">{{parseFloat(vault.ratio).toFixed(2)}}</div>
             </div> -->
             
                  <div v-if="vaults.length == 0" class="flex-col space-y-2"><div class="w-full text-center py-6" style="color: white;"> no vaults.</div></div>
                
      </div>
  </div>
  </div>

   </div>
</template>
<script>
 import  {tokenAddress ,tokenAbi } from "../store/modules/abi";
export default {
  data(){
    return{
      
       vaults  : [],
        headers: [
                      
                        {
                        text: 'Vault ID + Ratio', 
                        sortable: false,
                        value: 'id',
                        },
                        { text: 'Collateral Value', value: 'Collateral' },
                        { text: 'Debt', value: 'Debt' },
        
                    ], 
    }
  },
  mounted(){
    this.loadVault();
  },
         computed: {
    bnbprice : function(){
    return this.$store.state.vault.ethPrice;
    },
    gDaiPrice : function(){
    return this.$store.state.vault.gDaiPrice;
    },
    user : function(){
     return this.$store.state.currentUser.user;
   },
   
    },
  methods : {
    openVault(id){
      this.$router.push("/vaultmenu/"+id);
    },
     async loadVault(){
      this.vaults = [];
       window.tokenContract   =  await new window.web3.eth.Contract( tokenAbi ,tokenAddress);
      let vaultcount = await window.tokenContract.methods.vaultCount().call();
     
     for(let index = 0; index < vaultcount; index++){
       let vault = {};
       vault.id = index;
       vault.debt = await window.tokenContract.methods.vaultDebt(index).call();
       vault.debt = window.web3.utils.fromWei(vault.debt);
       vault.vaultCollateral = await window.tokenContract.methods.vaultCollateral(index).call();
       vault.vaultCollateral = window.web3.utils.fromWei(vault.vaultCollateral);
       vault.vaultCollateral = parseFloat(this.bnbprice) * parseFloat(vault.vaultCollateral);
       vault.debt  = parseFloat(this.gDaiPrice)* parseFloat(vault.debt);
       if(parseFloat(vault.vaultCollateral) == 0 && parseFloat(vault.debt) )
       vault.debtRatio = (parseFloat(vault.vaultCollateral) /  parseFloat(vault.debt) * 100).toFixed(2);
      // console.log( typeof( vault.debt))
      if(parseInt(vault.debt) !=0) {   
        vault.ratio = (parseFloat(vault.vaultCollateral)  / (parseFloat(vault.debt) )) * 100;

      }
       else {
        vault.ratio = 0;
       }
      this.vaults.push(vault);
       
     }
    },
  }
}
</script>
