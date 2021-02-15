import React from "react"
import ClientSearch from "../components/Product"
const SearchTemplate = props => {
  const { pageContext } = props
  const { bookData } = pageContext
  const { allBooks } = bookData
  console.log(allBooks)
  return <ClientSearch allBooks={allBooks} />
}
export default SearchTemplate
