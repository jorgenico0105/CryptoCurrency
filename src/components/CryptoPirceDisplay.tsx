import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spiner from "./Spiner"

export default function CryptoPirceDisplay() {
    const {cryptoInfoData,loading}=useCryptoStore()
    const hasResult=useMemo(()=>
      !Object.values(cryptoInfoData).includes('')
      ,[cryptoInfoData])
      console.log(hasResult)
  return (
    <div className="result-wrapper">
      {loading ? <Spiner></Spiner> : hasResult && (
        <>
          <h2>Cotizacion</h2>
          <div className="result">
            <img src={`https://cryptocompare.com/${cryptoInfoData.IMAGEURL}`} alt="Imagen Crypto" />
              <div>
                  <p>El precio es de: <span>{cryptoInfoData.PRICE}</span></p>
                  <p>El precio mas alto del dia: <span>{cryptoInfoData.HIGHDAY}</span></p>
                  <p>El precio mas bajo del dia: <span>{cryptoInfoData.LOWDAY}</span></p>
                  <p>Variacion ultimas 24 horas: <span>{cryptoInfoData.CHANGEPCT24HOUR}</span></p>
                  <p>Ultima actulizacion :<span>{cryptoInfoData.LASTUPDATE}</span></p>
              </div>
          </div>
        </>
      )}
    </div>
  )
}
