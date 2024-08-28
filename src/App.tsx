import { useEffect } from "react"
import CryptoSearch from "./components/CryptoSearch"
import { useCryptoStore } from "./store"
import CryptoPirceDisplay from "./components/CryptoPirceDisplay"
function App() {
  const {fetchCryptos}=useCryptoStore()
  useEffect(()=>{
    fetchCryptos()
  },[])
  return (
    <>
      <div className="container">
        <h1 
        className="app-title"
        >Cotizador de <span>Cryptomonedas</span></h1>
          <div className="content">
            <CryptoSearch></CryptoSearch>
            
            <CryptoPirceDisplay></CryptoPirceDisplay>
          </div>  
      </div>
    </>
  )
}

export default App
