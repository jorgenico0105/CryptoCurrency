import { create } from "zustand"
import { devtools } from "zustand/middleware"
import axios from "axios"
import { CryptoScehemasRes,CryptoRes, pairType,priceCurrencySchema,PriceCryptoType } from "./types"
type CryptoStore={
    cryptoCurrencies:CryptoRes[]
    cryptoInfoData:PriceCryptoType
    loading:boolean
    fetchCryptos: () => Promise<void>
    fetchCryptoInfo:(pair:pairType) => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data:{Data}} =await axios(url)
    const result = CryptoScehemasRes.safeParse(Data)
    if (result.success){
        return result.data
    }
}
async function infoCryto(pair:pairType) {
    const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
    const {data:{DISPLAY}}= await axios(url)
    const result = priceCurrencySchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency])
    if(result.data){
        return result.data
    }
}
export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptoCurrencies:[],
    cryptoInfoData:{
        IMAGEURL:'',
        PRICE:'',
        HIGHDAY:'',
        LOWDAY:'',
        CHANGEPCT24HOUR:'',
        LASTUPDATE:'',  
    } ,
    loading:false,
    fetchCryptos:async()=>{
        const cryptoCurrencies=await getCryptos()
        set(()=>({
            cryptoCurrencies:cryptoCurrencies
        }))
    },
    fetchCryptoInfo:async(pair)=>{
        const cryptoInfoData=await infoCryto(pair)
        set(()=>({
            loading:true
        }))
        set(()=>({
            cryptoInfoData,
            loading:false
        }))
    }
})))
