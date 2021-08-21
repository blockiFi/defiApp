<template>
 <div class="flex flex-row flex-nowrap justify-between w-screen">
                <nav class="w-screen bg-transparent gradiant-border-bottom z-10">
                    <div class="px-4 py-1.5">
                      <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 text-gray-900">
                            <img :src="logo"  alt="gDai Dao" class="stroke-current h-10 w-auto">
                        </div>
                        <div class="hidden sm:block sm:ml-4">
                          <div class="flex space-x-2">
                            <a class="text-baseline text-primary p-2 md:p-3 hover:text-white focus:text-white text-white" href="/" id="vaults-nav-link" aria-current="page" style="font-size: 20px;" >Vaults</a>
                            <a class="text-baseline text-primary p-2 md:p-3 hover:text-white focus:text-white" href="/" id="swap-nav-link" style="font-size: 20px;">Anchor</a></div>
                        </div>
                    
                   </div>
                <div class="flex flex-row items-center justify-center p-4 fixed left-0 bottom-0 bg-transparent lr:relative lr:p-0 lr:bg-transparent">
                    <div class="flex items-center justify-between sm:justify-end space-x-2 w-full">
                        
                      <div class="hidden md:inline-block">
                        <button class="flex items-center rounded bg-dm-tertiary whitespace-nowrap text-sm font-bold select-none">
                          <img :src="logo" class="rounded-md mr-2" style="width: 22px; height: 22px;">
                          <div class="grid grid-flow-col auto-cols-max items-center rounded-lg text-sm text-dm-text-primary py-2 px-3 pointer-events-auto">
                                $3200
                            </div>
                            <img src="@/assets/meta.png" alt="Add to metamask" class="ml-2 w-4 h-4">
                        </button>
                    </div>
                        
                        <div class="hidden md:inline-block">
                          <button class="flex items-center rounded bg-dm-tertiary whitespace-nowrap text-sm font-bold select-none">
                            <img :src="logo" class="rounded-md mr-2" style="width: 22px; height: 22px;">
                            <div class="grid grid-flow-col auto-cols-max items-center rounded-lg text-sm text-dm-text-primary py-2 px-3 pointer-events-auto">
                                  $0.993
                              </div>
                              <img src="@/assets/meta.png" alt="Add to metamask" class="ml-2 w-4 h-4">
                          </button>
                      </div>
                        <div class="hidden md:inline-block">
                            <button class="flex items-center rounded bg-dm-tertiary whitespace-nowrap text-sm font-bold select-none">
                                <div class="grid grid-flow-col auto-cols-max items-center rounded-lg text-sm text-dm-text-primary py-2 px-3 pointer-events-auto">
                                    0.00 gDai
                                </div>
                            </button>
                        </div>
                        <div class="hidden md:inline-block">
                          <button class="flex items-center rounded bg-dm-tertiary whitespace-nowrap text-sm font-bold select-none">
                              <div class="grid grid-flow-col auto-cols-max items-center rounded-lg text-sm text-dm-text-primary py-2 px-3 pointer-events-auto">
                                  0.00 ETH
                              </div>
                          </button>
                      </div>
                      <div class="hidden md:inline-block" v-if="user.id">
                        <button  @click="dialog = true" class="flex items-center rounded  bg-pink-deeper whitespace-nowrap text-sm font-bold select-none">
                            <div class="grid grid-flow-col auto-cols-max items-center rounded-lg text-sm  py-2 px-3 pointer-events-auto">
                              {{addressFormated}}
                            </div>
                        </button>
                    </div>
                    <div v-if="!user.id" class="hidden md:inline-block">
                      <button @click="login()" class="flex items-center rounded  bg-pink-deeper whitespace-nowrap text-sm font-bold select-none">
                          <div class="grid grid-flow-col auto-cols-max items-center rounded-lg text-sm  py-2 px-3 pointer-events-auto" >
                            connect wallet
                          </div>
                      </button>
                  </div>
                        <!-- <div class="w-auto flex items-center rounded bg-dm-tertiary whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
                         
                          <div id="web3-status-connected" class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3">
                              <div class="mr-2">Connect Wallet</div>
                          </div>
                      </div> -->
                        <div class="relative">
                            <button class="text-primary focus:outline-none" id="headlessui-popover-button-1" type="button" aria-expanded="false">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-400 inline-flex items-center ml-2 h-5 w-5 group-hover:text-secondary hover:text-high-emphesis" aria-hidden="true"><title>More</title><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex sm:hidden">
                    <button class="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none" id="headlessui-disclosure-button-3" type="button" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="block h-6 w-6" aria-hidden="true"><title>Burger</title><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <v-dialog
        v-model="dialog"
        width="500"
        >
      

      <v-card>
   
<v-divider></v-divider>
        <v-card-text>

         Do you want to logout?
        </v-card-text>

        

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            cancel
          </v-btn>
          <v-btn
            color="warning"
            text
            @click="logout()"
          >
            logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
<!-- <nav class="navbar navbar-expand-lg  bg-dark" >
        <div class="container-fluid">
            <img :src="logo" alt="" width="3%" class="m-1" style="border-radius: 10px;">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <router-link to="/"  class="nav-link active nav-white">Vault</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-white" href="#" >Swap</a>
              </li>
              
            
            </ul>
            <div class="d-flex">
             <button class="nav-button"  ><span style="margin-right: 0; color: white; padding: 6px; padding-left:12px; padding-right:14px">${{bnbprice}}</span><img src="@/assets/meta.png" height="20px" style="margin-top: 10px;margin-left: 0;; padding-right:12px" alt=""></button >
            <button class="nav-button"  ><img :src="logo"  height="20px" style="border-radius: 20px; margin-top: 10px;margin-left: 0; padding-left:12px" alt=""><span style="margin-right: 0; color: white; padding: 8px;">${{gDaiPrice}}</span></button >
              <div v-if="user.id" class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 connect-button" >
                 <div class="mr-2" @click="dialog = true">{{addressFormated}}</div>
             </div> 
             <button v-if="!user.id"  class="flex items-center rounded-lg bg-pink-deeper text-sm text-white py-2 px-3 connect-button" >
                <div class="mr-2" style="color: orangered;" @click="login()">connect wallet
            </div></button>
            </div>
          </div>
        </div>
        
      </nav> -->
</template>
<script>
export default {
  data(){
      return {
        dialog : false,
          logo : require('@/assets/image.png'),
          
      }
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
    addressFormated : function(){
     if(!this.user.address) return "";
     return this.user.address.substring(0 ,6) + "...." + this.user.address.substring(this.user.address.length -4 ,this.user.address.length)
   },
    },
  mounted(){
       setInterval(() => {
            if( localStorage.getItem("user") != null ){
               this.$store.dispatch("currentUser/setUser" , localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user"))  : {});   
            }
           if(this.user.address == undefined){
             this.$store.dispatch("currentUser/logout" );
           }
           
        }, 1000);
  },
  methods : {
      logout(){
         localStorage.removeItem("user");
         this.$store.dispatch("currentUser/logout" );
         this.dialog = false
      },
      login(){
        this.$store.dispatch('metamask/innitaliseWeb3').then(
            response =>{
              console.log(response);
              this.$store.dispatch('metamask/validateMetamaskAvailable')
              .then(
            response =>{
              console.log(response);
              this.$store.dispatch('metamask/loginMetaMask').then(
              () =>  {
                    this.$toast.success("login successful");
                    this.$store.dispatch("currentUser/setUser" , localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user"))  : {});
              }) 
            }
            ).catch (
                error => {
                    this.$toast.error(error);
                }
            )
            }
        ).catch (
            error => {
                this.$toast.error(error);
            }
        )
        }
  }

}
</script>