
const state = {}

const getters = {}
const actions = {
    // async approveSpend({state},data){
    //     window.web3 = new Web3(window.ethereum);
    //     window.currentasset1   =  await new window.web3.eth.Contract( ERC20Abi , data.address);
    //    await window.currentasset1.methods.approve(state.activeNetwork.bridgeAddress ,window.web3.utils.toBN(window.web3.utils.toWei(data.amount)).toString() ).send({from: this.state.currentUser.user.address});
         
    // },
    async createVault(){
   await window.tokenContract.methods.createVault().send({from: this.state.currentUser.user.address}).then(function(result){
    return new Promise((resolve ) => {
        resolve(result);
     });   
    })
}
};
const mutations = {}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}