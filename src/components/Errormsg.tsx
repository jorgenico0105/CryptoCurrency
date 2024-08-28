import { ReactNode } from "react";


export default function Errormsg({children}:{children:ReactNode}) {
  return (
    <div>
      <p>{children}</p>
    </div>
  )
}
