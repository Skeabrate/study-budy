import { useEffect, useState } from "react"

export const useWindowHeight = () => {
   const [dimensions, setDimensions] = useState({
      width: 0,
      height: 0,
   })

   useEffect(() => {
      window.addEventListener('resize', () => {
         setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
         })
      })

      return () => {
         window.removeEventListener('resize', () => {})
      }
   }, [])

   return dimensions
}