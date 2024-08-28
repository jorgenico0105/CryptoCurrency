import { useState } from "react"
import { currencies } from "../data/Currencies"
import { useCryptoStore } from "../store"
import type { pairType } from "../types"
import Errormsg from "./Errormsg"
export default function CryptoSearch() {

    const {cryptoCurrencies,fetchCryptoInfo} = useCryptoStore()
    const [error,setError]=useState('')
    const [pair,setPair]=useState<pairType>({
        currency:'',
        cryptocurrency:'',
    })

    const handleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setPair({
            ...pair,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(Object.values(pair).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        fetchCryptoInfo(pair)
    }
  return (
    <form className="form" onSubmit={handleSubmit}>
        {error && <Errormsg>{error}</Errormsg>}
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select 
            name="currency" 
            id="currency"
            value={pair.currency}
            onChange={handleChange}
            >
                <option value="">--Seleccione Opcion--</option>
                {currencies.map(currency =>(
                    <option 
                    value={currency.code}
                    key={currency.code}
                    >
                        {currency.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select 
            name="cryptocurrency" 
            id="cryptocurrency"
            onChange={handleChange}
            value={pair.cryptocurrency}
            >
                <option value="">--Seleccione Opcion--</option>
                {cryptoCurrencies.map(crypto=>(
                    <option
                        key={crypto.CoinInfo.Name}
                        value={crypto.CoinInfo.Name}
                    >{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>
        <input type="submit" value='Cotizar' />
    </form>
  )
}
