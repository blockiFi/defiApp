
const state = {
    depositDialog : false,
    withdrawDialog: false,
    borrowDialog :false,
    vaultOwner :false,
    rapayDialog : false,
    transferVaultDialog : false,
    vault : {}
}

const getters = {}
const actions = {
    // async approveSpend({state},data){
    //     window.web3 = new Web3(window.ethereum);
    //     window.currentasset1   =  await new window.web3.eth.Contract( ERC20Abi , data.address);
    //    await window.currentasset1.methods.approve(state.activeNetwork.bridgeAddress ,window.web3.utils.toBN(window.web3.utils.toWei(data.amount)).toString() ).send({from: this.state.currentUser.user.address});
         
    // },
    async loadVault({commit} , id ){
        let owner = await window.tokenContract.methods.vaultOwner(id).call();
        if(this.state.currentUser.user.address.toLowerCase() == owner.toLowerCase()){
            commit("setIsOwner" , true);
        }
      
      
       
       let vault = {};
       vault.debt = await window.tokenContract.methods.vaultDebt(id).call();
       vault.debt = window.web3.utils.fromWei(vault.debt);
       vault.vaultCollateral = await window.tokenContract.methods.vaultCollateral(id).call();
       vault.vaultCollateral= window.web3.utils.fromWei(vault.vaultCollateral);
    //   if(vault.vaultCollateral != '0') {   
    //     vault.ratio = await  window.web3.utils.toBN(vault.vaultCollateral).div(window.web3.utils.toBN(vault.debt)).toString();
    //   }
    //    else {
    //     vault.ratio = 0;
    //    }
       vault.ratio = 0;
       this.vaultData = vault;
       commit("setVaultData" , vault);
    },
    transferVaultDialog({commit} , status){
        commit("setTransferVaultDialog" , status);
    },
    rapayDialog({commit} , status){
        commit("setrapayDialog" , status);
    },
    borrowDialog({commit} , status){
        commit("setborrowDialog" , status);
    },
    depositDialog({commit} , status){
        commit("setdepositDialog" , status);
    },
    withdrawDialog({commit} , status){
        commit("setwithdrawDialog" , status);
    },
    async createVault(){
        await window.tokenContract.methods.createVault().send({from: this.state.currentUser.user.address}).then(function(result ){
           
             return new Promise( (resolve) => {
                resolve(result.events.CreateVault.returnValues.vaultID);
             })
        }).catch( function(error){
            return new Promise( (_,reject) => {
                reject(error);
             }) 
        })
}
};
const mutations = {
    setTransferVaultDialog(state , status){
        state.transferVaultDialog  = status;
       },
    setrapayDialog(state , status){
        state.rapayDialog  = status;
       },
    setborrowDialog(state , status){
     state.borrowDialog = status;
    },
    setVaultData(state , data){
     state.vault = data;
    },
    setIsOwner(state, status){
        state.vaultOwner = status;
    },
    setwithdrawDialog(state , status){
        state.withdrawDialog = status;
    },
    setdepositDialog(state , status){
        state.depositDialog = status;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}