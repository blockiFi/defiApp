

<template>
  <div class="flex flex-col flex-1 items-center justify-start w-screen overflow-y-auto overflow-x-hidden z-0 pt-4 sm:pt-8 px-4 md:pt-10 pb-20"><div class="sc-gwVKww sc-daURTG gBShpO"></div>
        <div height="0" class="sc-cQFLBn cThFpX"><div class="sc-gojNiO qxEgk">

        </div>
    </div>
        
<div class="container mx-auto max-w-3xl">
    <div class="bg-dm-secondary w-full rounded p-2">
      <div class="row" style="margin-top: 30px;margin-left: 10px;">
        <div class="col-md-9 text-secondary md:text-white">
          <button @click="back">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-qrIAp jEIQJc text-white"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      </button>
    </div>
        <div class="col-md-3 flex items-center">
          <div class="sc-kLIISr buSGRA text-white">MATIC Vault #{{id}}</div>
        </div>
       </div>
       <!-- vif -->
        <div class="loader"  v-show="loading">
        <div class="nb-spinner"></div>
       </div>
<div class="flex flex-col"><div class="flex-1 flex flex-col p-4">
    <div class="flex-col space-y-8">
        <div class="flex-col space-y-2">
            <div class="flex justify-between">
                <div class="text-xl text-white">Vault Info</div>
            </div>
            <div class="row">
              <div class="col-md-10 text-secondary md:text-white">
                <div class="text-lg text-secondary">Collateral</div>
              </div>
              <div class="col-md-2 flex items-center">
                <div class="sc-kLIISr buSGRA text-white">{{parseFloat(vaultData.vaultCollateral).toFixed(2)}} Eth</div>
              </div>
             </div>
             <div class="row">
              <div class="col-md-10 text-secondary md:text-white">
                <div class="text-lg text-secondary">Debt</div>
              </div>
              <div class="col-md-2 flex items-center">
                <div class="text-lg text-white overflow-hidden overflow-ellipsis">{{parseFloat(vaultData.debt).toFixed(2)}}  gDai </div>
              </div>
             </div>
             <div class="row">
              <div class="col-md-10 text-secondary md:text-white">
                <div class="text-lg text-secondary">Collateral Value</div>
              </div>
              <div class="col-md-2 flex items-center">
                <div class="text-lg text-white overflow-hidden overflow-ellipsis">${{(parseFloat(bnbprice) * parseFloat(vaultData.vaultCollateral)).toFixed(2)}}  </div>
              </div>
             </div>
          
             <div class="row">
              <div class="col-md-10 text-secondary md:text-white">
                <div class="text-lg text-secondary">Debt Value</div>
              </div>
              <div class="col-md-2 flex items-center">
                <div class="text-lg text-white overflow-hidden overflow-ellipsis">${{(parseFloat(gDaiPrice)* parseFloat(vaultData.debt)).toFixed(2)}}  </div>
              </div>
             </div>
            
            
             <div class="row">
              <div class="col-md-10 text-secondary md:text-white">
                <div class="text-lg text-secondary">Collateral to Debt Ratio</div>
              </div>
              <div class="col-md-2 flex items-center">
                <div class="text-lg text-white overflow-hidden overflow-ellipsis">
                  {{parseFloat(vaultData.ratio).toFixed(2)}} %
                </div>
              </div>
             </div>
            
             <div class="row">
              <div class="col-md-10 text-secondary md:text-white">
                <div class="text-lg text-secondary">Minimum Collateral to Debt Ratio</div>
              </div>
              <div class="col-md-2 flex items-center">
                <div class="text-lg text-white overflow-hidden overflow-ellipsis">150%</div>
              </div>
             </div>
          
             <div class="row">
              <div class="col-md-10 text-secondary md:text-white">
                <div class="text-lg text-secondary">Available to Borrow</div>
              </div>
              <div class="col-md-2 flex items-center">
                <div class="text-lg text-white overflow-hidden overflow-ellipsis">{{parseFloat(vaultData.availableBorrow).toFixed(2)}} gDai</div>
              </div>
             </div>
            
    </div>
    <div class="react-tabs" data-tabs="true">
        <div class="flex justify-between mb-2">
            <div class="text-xl text-white">Manage</div>
        </div>
        <ul class="flex rounded bg-white p-1 overflow-auto" role="tablist">
            <li class="flex flex-1 justify-center items-center rounded text-lg text-primary cursor-pointer focus:outline-none select-none px-3 py-4 " role="tab" id="react-tabs-0" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-1" tabindex="0" :class="{ 'bg-dm-primary text-off-white' : activeDeposit}" @click="activate('deposit')" >Deposit</li>
            <li class="flex flex-1 justify-center items-center rounded text-lg text-primary cursor-pointer focus:outline-none select-none px-3 py-4" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3" :class="{ 'bg-dm-primary text-off-white' : activeWithdraw}"  @click="activate('withdraw')">Withdraw</li>
            <li class="flex flex-1 justify-center items-center rounded text-lg text-primary cursor-pointer focus:outline-none select-none px-3 py-4" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3" :class="{ 'bg-dm-primary text-off-white' : activeBorrow}"  @click="activate('borrow')">Borrow</li>
            <li class="flex flex-1 justify-center items-center rounded text-lg text-primary cursor-pointer focus:outline-none select-none px-3 py-4" role="tab" id="react-tabs-6" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-7" :class="{ 'bg-dm-primary text-off-white' : activeRepay}"  @click="activate('repay')">Repay</li>
        </ul>
        <div v-if="activeDeposit" class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0">
            <div>
            <div class="flex items-center justify-between my-4">
                <div class="flex items-center text-base text-secondary">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline;"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                    </span>
                    <span class="mx-2">Deposit collateral</span>
                </div>
                <div class="text-base text-dm-text-primary text-right">Balance: {{ethBalance}} ETH</div>
            </div>
            <div class="flex items-center relative w-full mb-4">
                <input v-model="depositValue" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" min="0" minlength="1" maxlength="79" spellcheck="false" class="sc-fhYwyz gehgmm text-gray-900 w-full p-3 bg-input rounded focus:ring focus:ring-dm-gray" value="">
                <button class="bg-transparent px-2 py-1 flex flex-row items-center justify-center rounded focus:outline-none focus:ring absolute right-4 focus:ring text-xs bg-dm-primary focus:ring-offset-dm-gray opacity-100 disabled:pointer-events-none disabled:opacity-10" style="color: white" @click="depositMax">MAX</button>
            </div>
            <button class="bg-pink bg-opacity-80 w-full rounded text-base hover:bg-opacity-100 disabled:opacity-20 disabled:cursor-default p-3 flex flex-row items-center justify-center rounded focus:outline-none focus:ring bg-dm-primary text-white opacity-100 disabled:pointer-events-none disabled:opacity-10"  @click="deposit()">Deposit ETH</button>
        </div>
    </div>
    <div v-if="activeWithdraw" class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2"><div>
        <div class="flex items-center justify-between my-4"><div class="flex items-center text-base text-secondary">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline;"><line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>
            </svg>
        </span>
        <span class="mx-2">Withdraw collateral</span>
    </div>
    <div class="text-base text-dm-text-primary text-right">Available: {{parseFloat(vaultData.vaultCollateral).toFixed(2)}} ETH</div>
</div>
<div class="flex items-center relative w-full mb-4">
    <input v-model="withdrawValue" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" min="0" minlength="1" maxlength="79" spellcheck="false" class="sc-fhYwyz gehgmm text-gray-900 w-full p-3 bg-input rounded focus:ring focus:ring-dm-gray" value="">
</div>
<button class="bg-pink bg-opacity-80 w-full rounded text-base hover:bg-opacity-100 disabled:opacity-20 disabled:cursor-default p-3 flex flex-row items-center justify-center rounded focus:outline-none focus:ring bg-dm-primary text-white opacity-100 disabled:pointer-events-none disabled:opacity-10"  @click="withdraw()">Withdraw ETH</button>
</div>
</div>
<div v-if="activeBorrow" class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-5" aria-labelledby="react-tabs-4">
    <div class="flex flex-col">
        <div class="flex items-center justify-between my-4">
            <div class="flex items-center text-base text-secondary">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline;"><line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline></svg>
                </span>
                <span class="flex items-center ml-2">Borrow gDai<span style="margin-left: 4px;"><div class="sc-bwzfXH kNDdYo">
                    <div class="sc-ifAKCX dCBhOg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                </div>
            </span>
        </span>
    </div>
    <div class="text-base text-dm-text-primary text-right">Max borrow: {{parseFloat(vaultData.availableBorrow).toFixed(2)}} gDai</div>
</div>
<span class="w-full text-red text-center" v-if="parseFloat(vaultData.vaultCollateral) == 0">You must deposit collateral before you can borrow Mai (miMatic).</span>
</div>
<div  v-if="parseFloat(vaultData.vaultCollateral) != 0">
  <div class="flex items-center relative w-full mb-4">
    <input v-model="borrowValue" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" min="0" minlength="1" maxlength="79" spellcheck="false" class="sc-fhYwyz gehgmm text-gray-900 w-full p-3 bg-input rounded focus:ring focus:ring-dm-gray" value="">
    <button class="bg-transparent px-2 py-1 flex flex-row items-center justify-center rounded focus:outline-none focus:ring absolute right-4 focus:ring text-xs bg-dm-primary focus:ring-offset-dm-gray opacity-100 disabled:pointer-events-none disabled:opacity-10" style="color: white" @click="borrowMax(parseInt(vaultData.availableBorrow))">MAX</button>
  </div>
  <button class="bg-pink bg-opacity-80 w-full rounded text-base hover:bg-opacity-100 disabled:opacity-20 disabled:cursor-default p-3 flex flex-row items-center justify-center rounded focus:outline-none focus:ring bg-dm-primary text-white opacity-100 disabled:pointer-events-none disabled:opacity-10"  @click="borrow()">Borrow gDai</button>
  
</div>

</div>
<div v-if="activeRepay" class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-7" aria-labelledby="react-tabs-6">
    <div>
        <div class="flex items-center justify-between my-4">
            <div class="flex items-center text-base text-secondary">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline;"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                </span>
                <span class="mx-2">Repay gDai debt</span>
            </div>
            <div class="text-base text-primary text-right">Balance: {{gDaiBalance}} gDai</div>
        </div>
        
        <div class="flex items-center relative w-full mb-4">
            <input inputmode="decimal" v-model="repayValue" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" min="0" minlength="1" maxlength="79" spellcheck="false" class="sc-fhYwyz gehgmm text-gray-900 w-full p-3 bg-input rounded focus:ring focus:ring-dm-gray" value="">
            <button class="bg-transparent px-2 py-1 flex flex-row items-center justify-center rounded focus:outline-none focus:ring absolute right-4 focus:ring text-xs bg-dm-primary focus:ring-offset-dm-gray opacity-100 disabled:pointer-events-none disabled:opacity-10" style="color: white;" @click="allGdaiBalance">ALL</button>
        </div>
        <button v-if="approve" class="bg-pink bg-opacity-80 w-full rounded text-base hover:bg-opacity-100 disabled:opacity-20 disabled:cursor-default p-3 flex flex-row items-center justify-center rounded focus:outline-none focus:ring bg-dm-primary text-white opacity-100 disabled:pointer-events-none disabled:opacity-10" @click="approveToken()">Approve gDai </button>
        <button v-else class="bg-pink bg-opacity-80 w-full rounded text-base hover:bg-opacity-100 disabled:opacity-20 disabled:cursor-default p-3 flex flex-row items-center justify-center rounded focus:outline-none focus:ring bg-dm-primary text-white opacity-100 disabled:pointer-events-none disabled:opacity-10" @click="repayToken()">Repay gDai </button>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
   
</template>
<script>
   import  {tokenAddress } from "../store/modules/abi";
export default {
 props: ['id'], 
 data(){
     return {
      activeDeposit:true,
      activeBorrow : false,
      activeWithdraw : false,
      activeRepay : false,
      depositValue : 0,
      withdrawValue : 0,
      repayValue: 0,
      borrowValue : 0 ,
         owner: "",
         approve : true,
        loading: false,
     }
     //0xb95C80FaE7285EeCb5B8ad252d1af0B21d351AE7
 },
 mounted(){

    //  setInterval(() => {
    //     if(this.user.address.toLowerCase() == this.owner.toLowerCase()){
    //       this.vaultOwner = true; 
    //    }
    //  }, 1000);
       setTimeout(() => {
        this.loadData();
        
   },1000)
     
    console.log(this.$route.params.id);
 },
 computed : {
  gDaiBalance : function(){
    return this.$store.state.vault.gdaiBalance;
    },
    ethBalance : function(){
    return this.$store.state.vault.EthBalance;
    },
   bnbprice : function(){
    return this.$store.state.vault.ethPrice;
    },
    gDaiPrice : function(){
    return this.$store.state.vault.gDaiPrice;
    },
    vaultData : function(){
        return this.$store.state.vault.vault;

    },
    vaultOwner:function(){
        return this.$store.state.vault.vaultOwner;
    },
     user : function(){
     return this.$store.state.currentUser.user;
   },

 },
 methods : {
  async   approveToken(){
               this.loading = true
        try {     
                 await window.tokenContract.methods.approve(tokenAddress , window.web3.utils.toBN(window.web3.utils.toWei( this.repayValue))).send({from: this.user.address});
                 this.$toast.success("Token Approved successfully");
             
                   this.loading = false;
                    this.$store.dispatch("vault/loadVault" , this.id);
                    this.approve = false;
             }
            catch(error){
                this.$toast.error("error approving token"); 
                console.log(error);
                this.loading = false
            } 
            },
         async   repayToken(){
               this.loading = true
        try {     
                 await window.tokenContract.methods.payBackToken(this.id ,window.web3.utils.toBN(window.web3.utils.toWei( this.repayValue))).send({from: this.user.address});
                 this.$toast.success("Token Repayed successfully");
              
                   this.loading = false;
                    this.$store.dispatch("vault/loadVault" , this.id);
                    this.$store.dispatch("vault/getPriceData" );
                      this.$store.dispatch("vault/loadBalances" );
                    this.approve = true;
                    
             }
            catch(error){
                
                 this.$toast.error("Transaction Reverted."); 
                console.log(JSON.parse(error));
                
                this.loading = false
            } 
            },
borrowMax(val){
  this.borrowValue = val;
},
  async borrow(){
    this.loading = true;
    try {     
                 await window.tokenContract.methods.borrowToken(this.id ,window.web3.utils.toBN(window.web3.utils.toWei( this.borrowValue)) ).send({from: this.user.address});
                 this.$toast.success("Token Borrowed successfully");
                 this.loading = false;
                    this.$store.dispatch("vault/loadVault" , this.id);
                    this.$store.dispatch("vault/getPriceData" );
                      this.$store.dispatch("vault/loadBalances" );
             }
            catch(error){
                this.$toast.error("Transaction Reverted.");
                this.loading = false;
            }
  },
   async withdraw(){
    if(this.withdrawValue == 0 ){
      this.$toast.error("enter withdraw value");
      return;
    }
   this.loading = true
        try {     
                 await window.tokenContract.methods.withdrawCollateral(this.id ,  window.web3.utils.toBN(window.web3.utils.toWei(this.withdrawValue))).send({from: this.user.address });
                 this.$toast.success("Collatoral Deposited successfully");
             
                   this.loading = false;
                    this.$store.dispatch("vault/loadVault" , this.id);
                    this.$store.dispatch("vault/getPriceData" );
                    this.$store.dispatch("vault/loadBalances" );

             }
            catch(error){
                  this.$toast.error("Transaction Reverted.");
                this.loading = false
            } 
   },
  async   deposit(){
    if(this.depositValue == 0 ){
      this.$toast.error("enter deposit value");
      return;
    }
               this.loading = true
        try {     
                 await window.tokenContract.methods.depositCollateral(this.id).send({from: this.user.address , value : window.web3.utils.toBN(window.web3.utils.toWei(this.depositValue))});
                 this.$toast.success("Collatoral Deposited successfully");
             
                   this.loading = false;
                    this.$store.dispatch("vault/loadVault" , this.id);
                    this.$store.dispatch("vault/getPriceData" );
                    this.$store.dispatch("vault/loadBalances" );
                    
             }
            catch(error){
              this.$toast.error("Transaction Reverted.");
                this.loading = false
            } 
            },
  depositMax(){
    this.depositValue = this.ethBalance;
  },
  allGdaiBalance(){
    this.repayValue = this.gDaiBalance;
  },
 activate(type){
  this.offAll();
  if(type == 'deposit'){
    this.activeDeposit = true;
  }else if(type == 'withdraw'){
    this.activeWithdraw = true;
  }
  else if(type == 'borrow'){
    this.activeBorrow = true;
  }
  else if(type == 'repay'){
    this.activeRepay = true;
  }
 },
   offAll(){
    this.activeDeposit = false;
    this.activeBorrow = false;
    this.activeWithdraw = false;
    this.activeRepay = false;
   },
  back(){
    this.$router.push({ path: "/" })
  },
  async destroyVolt(){
   this.loading = true;
      try {
        await window.tokenContract.methods.destroyVault(this.id).send({from: this.user.address});
        this.$toast.success("vault destroyed successfully");
      
      this.$router.push({ path: "/" })
      }catch(err){
        console.log(err);
        this.$toast.error("transaction reverted");
        
      }
      
  },
   openTransferModal(){
        this.$store.dispatch("vault/transferVaultDialog" , true);
     },
    openborrowModal(){
        this.$store.dispatch("vault/borrowDialog" , true);
     },
     openrepayModal(){
        this.$store.dispatch("vault/rapayDialog" , true);
     },
     openDeopsitModal(){
        this.$store.dispatch("vault/depositDialog" , true);
     },
     openWithdrawModal(){
        this.$store.dispatch("vault/withdrawDialog" , true);
     },
   async loadData(){
    this.$store.dispatch("vault/loadVault" , this.id);
     }
 }
}
</script>
<style scoped>
  .col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-auto, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-auto, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-auto, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-auto {
    width: 100%;
    padding: 2px;
}
</style>

