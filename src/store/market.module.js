import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import erc721ABI from '@/core/config/erc721';
import { marketAddress } from "../core/config";

export const market = {
    namespaced: true,
    state: {
    },
    actions: {
        async approve({ commit, rootState }, data) {
            const tokenContract = new rootState.web3.eth.Contract(
                erc721ABI,
                rootState.web3.utils.toChecksumAddress(data.contractAddress),
            );

            tokenContract.methods.approve(marketAddress, data.tokenId).send({
                from: rootState.user.address, gas: 210000
            });
        },
        async createOrder({ commit, rootState }, data) {
            rootState.marketContract.methods.createOrder(
                data.assetContractAddress,
                data.tokenId,
                data.nftPrice,
                data.downsideRate,
                data.downsidePeriod,
                false,
                data.downsidePeriod
            ).send({ from: rootState.user.address, gas: 250000 });
        },
        async buyFixedPayOrder({ commit, rootState }, orderID) {
            console.log(orderID)
            rootState.marketContract.methods.buyFixedPayOrder(
                orderID
            ).send({ from: rootState.user.address, gas: 30000 });
        },
    },
    getters: {
    },
    mutations: {
    }
}
