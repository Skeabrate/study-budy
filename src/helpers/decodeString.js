export const decodeString = (val) => {
   const data = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż']
   const replaceData = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z']
   
   const newString = []

      for(let i=0; i<val.length; i++){
         newString.push(val[i])
         for(let j=0; j<data.length; j++){
            if(val[i] === data[j]){
               newString.pop(val[i])
               newString.push(replaceData[j])
            }
            else continue
         }
      }

      return newString.join("")
}