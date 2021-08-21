<template>
<div>
<div class="container" style="height: 70vh; margin-top: 10vh; ">
          <div class="top-bar" >
              <div class="top-title">
              
              <h4> Vault monitor</h4> 
              <p>Showing vaults close to liquidation</p>

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
             <v-data-table
    :headers="headers"
    :items="vaults"
    :items-per-page="5"
    
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  >
  
<template v-slot:item="row">
          <tr @click="openVault(row.item.id)">
              <td># {{row.item.id}} ({{row.item.debtRatio}}%)</td>
              <td>${{row.item.vaultCollateral}}</td>
              <td>
              <span >${{row.item.debt}}</span>
              </td>
              
              
          </tr>
      </template>
  </v-data-table>
            
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
    return this.$store.state.constant.bnbprice;
    },
    gDaiPrice : function(){
    return this.$store.state.constant.gDaiPrice;
    },
    user : function(){
     return this.$store.state.currentUser.user;
   },
   
    },
  methods : {
    openVault(id){
      this.$router.push("/vault/"+id);
    },
     async loadVault(){
      this.vaults = [];
       window.tokenContract   =  await new window.web3.eth.Contract( tokenAbi ,tokenAddress);
      let vaultcount = await window.tokenContract.methods.vaultCount().call();
      console.log(vaultcount);
     let vaults =localStorage.getItem(this.user.address.toLowerCase()) != null ? JSON.parse(localStorage.getItem(this.user.address.toLowerCase()))  : []

     console.log(vaults);
     for(let index = 0; index < vaultcount; index++){
       let vault = {};
       vault.id = index;
       vault.debt = await window.tokenContract.methods.vaultDebt(index).call();
       vault.debt = window.web3.utils.fromWei(vault.debt);
       vault.vaultCollateral = await window.tokenContract.methods.vaultCollateral(index).call();
       vault.vaultCollateral = window.web3.utils.fromWei(vault.vaultCollateral);
       vault.vaultCollateral = parseFloat(this.bnbprice) * parseFloat(vault.vaultCollateral);
       vault.debt  = parseFloat(this.gDaiPrice)* parseFloat(vault.debt);
       vault.debtRatio = (parseFloat(vault.vaultCollateral) /  parseFloat(vault.debt) * 100).toFixed(2);
      console.log( typeof( vault.debt))
      // if(vault.debt != '0') {   
      //   vault.ratio = await  window.web3.utils.toBN(vault.vaultCollateral).div(window.web3.utils.toBN(vault.debt)).toString();
      // }
      //  else {
      //   vault.ratio = 0;
      //  }
      vault.ratio = 0;
      this.vaults.push(vault);
       
     }
    },
  }
}
</script>
