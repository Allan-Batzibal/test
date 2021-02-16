const path = require("path")
const axios = require("axios")
exports.createPages = ({ actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://www.disdelsa.com/filemanager/file1007/jsonFile/9/allproductos.json"
      )
      .then(result => {
        const { data } = result
        createPage({
          path: "/search",
          component: path.resolve(
            `./opt/build/repo/src/templates/productos.js`
          ),
          context: {
            bookData: {
              allBooks: data,
            },
          },
        })
        resolve()
      })
      .catch(err => {
        console.log("====================================")
        console.log(`error creating Page:${err}`)
        console.log("====================================")
        reject(new Error(`error on page creation:\n${err}`))
      })
  })
}
