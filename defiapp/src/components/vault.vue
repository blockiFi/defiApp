<template>
 <div>
  <div class="relative bg-dm-tertiary" style="border-radius: 10px; background-image: url(&quot;&quot;); background-repeat: no-repeat; background-size: contain; background-position: center bottom;">
    <div>
        <div class="flex justify-between items-center bg-dm-secondary flex items-center rounded-t px-2 py-4 sm:px-8 sm:py-6">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2 w-full">
                <div class="mb-4 md:flex md:mb-0 items-center col-span-4 md:col-span-4">
                    <div class="flex flex-row items-center space-x-2 text-lg whitespace-nowrap">
                        <span>Your</span>
                        
                        <span>Vaults</span>
                    </div>
                </div>
                <button class="bg-transparent p-3 flex flex-row items-center justify-center rounded focus:outline-none focus:ring col-span-1 bg-dm-primary text-white opacity-100 disabled:pointer-events-none disabled:opacity-10">Search</button>
                <button class="bg-transparent p-3 flex flex-row items-center justify-center rounded focus:outline-none focus:ring bg-dm-primary text-white col-span-1 opacity-100 disabled:pointer-events-none disabled:opacity-10"  @click="create" >Create</button>
            </div>
        </div>
        <div class="px-2 py-4 sm:p-8">
           
            <div class="grid grid-cols-4 pb-4 px-4 text-sm  text-secondary">
                <div>Vault ID</div>
                <div class="flex items-center justify-end">Collateral (MATIC)</div>
                <div class="flex items-center justify-end">Debt (MAI)</div>
                <div class="flex items-center justify-end">Ratio</div>
            </div>
            <div style="background: gray ; padding :15px; border-radius: 20px ; margin: 10px;" class="grid grid-cols-4 pb-4 px-4 text-sm  " v-for="vault  in vaults" :key="vault.id"  @click="openVault(vault.id)">
              <div>{{vault.id}}</div>
              <div class="flex items-center justify-end">{{parseFloat(vault.vaultCollateral).toFixed(2) }} </div>
              <div class="flex items-center justify-end">{{parseFloat(vault.debt).toFixed(2) }}</div>
              <div class="flex items-center justify-end">{{parseFloat(vault.ratio).toFixed(2)}}</div>
           </div>
           
                <div v-if="vaults.length == 0" class="flex-col space-y-2"><div class="w-full text-center py-6">You have no vaults.</div></div>
                <div class="rounded-lg bg-yellow-400 bg-opacity-20 p-4 mt-4"><span class="text-sm text-white flex flex-row text-center">55,264,387.665 MAI available to mint<span style="margin-left: 4px;">
                    <div class="sc-bwzfXH kNDdYo">
                        <div class="sc-ifAKCX dCBhOg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </div>
                    </div>
                </span>
            </span>
        </div>
    </div>
</div>
</div>
<div class="text-center m-4">
<h2 class="text-dm-text-tertiary">
    Liquidate undercollateralized vaults in the 
    <span style="color:blue ; cursor: pointer;" @click="openMonitor">vault monitor</span>
    !</h2>
</div>
 </div>
<!-- <div class="container" style="height: 70vh; margin-top: 10vh; ">
          <div class="top-bar" >
              <h4 class="top-title">Your Vaults</h4>
              <div class="top-buttons">
                <button class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 search-button " style="margin-right: 20px">
                    <div class="mr-2 " @click="openSearch" >Search</div>
                </button>
                <button class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 search-button " >
                    <div class="mr-2 " @click="create" >Create</div>
                </button>
                
              </div>
            
          </div>

          <div v-if="search"  class=" " style=" background: hsl(225, 20%, 4%);; padding-bottom: 20px;">
            <div class="row">
                <div class="col-2"></div>
              <div class="col-7"><input type="number" v-model="valtId" class="form-control" style="height: 40px; border-radius: 20px;" placeholder="Vault ID"></div>
              <div class="col-3"> 
                  <button class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 search-button" >
                <div class="mr-2 " @click="searchVault()">Go</div>
            </button></div>
            </div>
           
        </div>
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
              <td>{{row.item.id}}</td>
              <td>{{row.item.vaultCollateral}}</td>
              <td>
              <span >{{row.item.debt}}</span>
              </td>
              
              <td>
                 {{row.item.ratio}}
              </td>
              
          </tr>
      </template>
  </v-data-table>
            
       </div>  
      </div> -->
</template>


<script>
export default {
  data(){
      return {
        valtId : '',
        search: false,
        vaults : [],
        dialog : false,
          logo : require('@/assets/image.png'),
             headers: [
                      
                        {
                        text: 'Vault ID', 
                        sortable: false,
                        value: 'id',
                        },
                        { text: 'Collateral (ETH)', value: 'Collateral' },
                        { text: 'Debt gDai', value: 'Debt' },
                        { text: 'Ratio(%)', value: 'ratio' },
        
                    ], 
      }
  },
   computed: {
    user : function(){
     return this.$store.state.currentUser.user;
   },
   
    },
  mounted(){
   setTimeout(() => {
    this.rescanVaults();
    this.loadVault();
   },1000)
  },
  methods : {
    openMonitor(){
                this.$router.push({ path: "/monitor" })
            },
   async searchVault(){
    this.$store.dispatch("loading/activateLoader" , true);
      if(this.valtId == ''){
        this.$toast.error("Enter Vault ID");
        this.$store.dispatch("loading/activateLoader" , false);
        return;
      }

      let valid = await window.tokenContract.methods.vaultExistence(this.valtId).call();
      if(valid){
        this.$store.dispatch("loading/activateLoader" , false);
        this.$router.push("/vault/"+this.valtId);
      }else{
        this.$toast.error("Enter a Valid Vault ID");
        this.$store.dispatch("loading/activateLoader" , false);
      }
      
    },
    openSearch(){
      this.search =  true;
    },
    openVault(id){

      this.$router.push("/vault/"+id);
    },
    async loadVault(){
      this.vaults = [];
      console.log(this.user.address);
     let vaults =localStorage.getItem(this.user.address.toLowerCase()) != null ? JSON.parse(localStorage.getItem(this.user.address.toLowerCase()))  : []

     console.log(vaults);
     for(let index = 0; index < vaults.length ; index++){
       let vault = {};
       vault.id = vaults[index];
       vault.debt = await window.tokenContract.methods.vaultDebt(vaults[index]).call();
       vault.debt = window.web3.utils.fromWei(vault.debt);
       vault.vaultCollateral = await window.tokenContract.methods.vaultCollateral(vaults[index]).call();
       vault.vaultCollateral = window.web3.utils.fromWei(vault.vaultCollateral);
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
     async rescanVaults(){
       let vaultcount = await window.tokenContract.methods.vaultCount().call();
       console.log(vaultcount);
       let vaults = localStorage.getItem(this.user.address.toLowerCase()) != null ? JSON.parse(localStorage.getItem(this.user.address.toLowerCase()))  : [];
       console.log(vaults);
       var array = [];
       for(let index = 0 ; index < vaultcount; index++){
         let vaultOwner =  await window.tokenContract.methods.vaultOwner(index).call();
         console.log(vaultOwner);
        if(vaultOwner.toLowerCase() == this.user.address.toLowerCase()){
           array.push(index);
           localStorage.setItem(this.user.address.toLowerCase(),JSON.stringify(array));
        }
       }
    
        
     },
     async create(){
      this.$store.dispatch("loading/activateLoader" , true);

      this.$store.dispatch("vault/createVault").then(
        (vaultID) =>{
          let vaultIDs =  localStorage.getItem(this.user.address) != null ? JSON.parse(localStorage.getItem(this.user.address))  : []
            vaultIDs.push(vaultID)
             localStorage.setItem(this.user.address,JSON.stringify(vaultIDs));
          this.$toast.success("vault created successfully");
          this.rescanVaults();
         this.loadVault();
         this.$store.dispatch("loading/activateLoader" , false);
        }
      ).catch( error => {
        this.$toast.error("transaction reverted");
        console.log(error)
        this.$store.dispatch("loading/activateLoader" , false);
      });
      

        
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