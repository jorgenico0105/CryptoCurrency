import {z} from 'zod'

const PairSchema=z.object({
    currency:z.string(),
    cryptocurrency:z.string(),
})
export type pairType=z.infer<typeof PairSchema>
const CurrencySchema=z.object({
    code: z.string(),
    name:z.string(),
})

export type Currency=z.infer<typeof CurrencySchema>

const CryptoScehemaRes = z.object({
      CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string(),
      }),
    }
  );
export const CryptoScehemasRes=z.array(CryptoScehemaRes)
export type CryptoRes=z.infer<typeof CryptoScehemaRes>
export const priceCurrencySchema=z.object({
    IMAGEURL:z.string(),
    PRICE:z.string(),
    HIGHDAY:z.string(),
    LOWDAY:z.string(),
    CHANGEPCT24HOUR:z.string(),
    LASTUPDATE:z.string(),
})
export type PriceCryptoType=z.infer<typeof priceCurrencySchema>