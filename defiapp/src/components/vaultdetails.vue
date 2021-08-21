

<template>
   <div class="row">
                <div class="col-md-8 offset-2 grid-margin stretch-card " >
                  <div class="card" >
                    <div class="card-body" style="background: #263238 !important">
                        <!-- <h4 class="card-title">Token Address</h4> -->
                         <div class="loader"  v-show="loading">
                                <div class="nb-spinner"></div>
                        </div>
                      <div class="row"  v-show="!loading">
                        <div class="col-md-12">
                        <h4 class="card-title"> <router-link to="/" ><i class="fas fa-arrow-left"></i></router-link><span class="float-right">Vault ID #{{id}}</span></h4>
                         
                      </div>
                      <div class="col-md-12"> <hr class="alert-success mt-4"> </div>
                      <div class="col-md-12">
                       <h4>Vault Info</h4>
                       <h6>Collateral <span class="float-right">{{vaultData.vaultCollateral}} Matic</span></h6>
                       <h6>Debt <span class="float-right">{{vaultData.debt}}  ghoshDai (gDai)</span></h6>
                       <h6>Collateral Value <span class="float-right">${{parseFloat(bnbprice) * parseFloat(vaultData.vaultCollateral)}} USD</span></h6>
                       <h6>Debt Value <span class="float-right">${{parseFloat(gDaiPrice)* parseFloat(vaultData.debt)}} USD</span></h6>
                       <h6>Collateral to Debt Ratio <span class="float-right">{{((parseFloat(bnbprice) * parseFloat(vaultData.vaultCollateral)) /(parseFloat(gDaiPrice)* parseFloat(vaultData.debt))) *100}} %</span></h6>
                       <h6>Collateral to Debt Ratio <span class="float-right">150.00 %</span></h6>
                       <!-- <h6>Available to Borrow <span class="float-right">0.2038 MAI (gDai)</span></h6> -->
                      </div>
                        <div class="col-md-12">
                          <!-- <h4>Liquidation Details <span class="float-right"> <i class="mdi mdi-menu-up d-none d-sm-block"></i> </span></h4> -->
                           <h6>Current MATIC price <span class="float-right">${{bnbprice}}</span></h6>
                           <!-- <h6>Estimated liquidation price <span class="float-right">$0.476</span></h6> -->
                        </div>
                     <div class="col-md-12" v-if="vaultOwner">
                       <button  class="btn btn-success m-1" @click="openDeopsitModal">Deposit Collatoral</button>
                       <button  class="btn btn-success m-1" @click="openWithdrawModal">Withdraw Collatoral</button>
                       <button  class="btn btn-warning m-1"  @click="openborrowModal">Borrow  Token</button>
                       <button  class="btn btn-warning m-1" @click="openrepayModal">PayBack  Token</button>
                       <button  class="btn btn-warning m-1" @click="openTransferModal">Transfer Vault</button>
                       <button  class="btn btn-danger m-1">Destroy Vault</button>
                     </div>
                     <div class="col-md-12"> <hr class="alert-success mt-4"> </div>
                     <h4>Liquidation Details</h4>
                     
                     <h6>Current ETH price <span class="float-right">${{bnbprice}}</span></h6>
                     <h6>Estimated liquidation price <span class="float-right">${{(bnbprice/3).toFixed(2)}}</span></h6>
                      </div>
                    </div>
                    </div>
                    </div>
                    <depositecollateral :id="id"></depositecollateral>
                    <withdrawcollateral :id="id"></withdrawcollateral>
                    <borrowtoken :id="id"></borrowtoken>
                    <repaytoken :id="id">  </repaytoken>
                    <transfervault :id="id"></transfervault>
            </div>
</template>
<script>
export default {
 props: ['id'], 
 data(){
     return {
         owner: "",
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
   bnbprice : function(){
    return this.$store.state.constant.bnbprice;
    },
    gDaiPrice : function(){
    return this.$store.state.constant.gDaiPrice;
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