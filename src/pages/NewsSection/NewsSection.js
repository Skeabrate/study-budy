import {useState, useEffect} from 'react'
import { StyledAddButton } from "../../components/AddButton/AddButton.styles"
import { Wrapper, StyledSection, StyledParagraph, StyledDescription, StyledTitle, StyledContentWrapper } from "./NewsSection.styles"
import axios from 'axios'

export default function NewsSection(){
   const [articles, setArticles] = useState([])
   const [error, setError] = useState('')

   useEffect(() => {
      axios.post('https://graphql.datocms.com/',
         {
            query: `
         {
            allArticles {
              id
              title
              category
              content
              image{
                url
              }
            }
          }`
         },
         {
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
            }
         }).then(data => {
            setArticles(data.data.data.allArticles)
         }).catch(() => {
            setError(`Sorry we could't load any articles for you :C`)
         })
   }, [])

   return (
      <>
         <StyledSection>
            <header style={{margin: '20px 0 40px'}}>
               <StyledTitle>University news feed</StyledTitle>
            </header>

            {articles.length > 0 ? articles.map(({id, title, category, content, image = null}) => (
               <div key={id} style={{marginBottom: '50px'}}>
                  <Wrapper>
                     <header>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledDescription>{category}</StyledDescription>
                     </header>

                     <StyledContentWrapper>
                        <StyledParagraph>{content}</StyledParagraph>
                        {image ? <img alt="" src={image.url}/> : null}
                     </StyledContentWrapper>

                     <StyledAddButton>Read more</StyledAddButton>
                  </Wrapper>
               </div>
            )) : <StyledTitle>{error ? error : 'Loading ...'}</StyledTitle>}

            

         </StyledSection>
      </>
   )
}