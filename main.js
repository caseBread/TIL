const axios = require("axios")

axios.get("https://m.naver.com")
  .then(response => {
    // access parsed JSON response data using response.data field
    data = console.log(response.data)
    //console.log(data.count)
    //console.log(data.products)
  })
  .catch(error => {
    if (error.response) {
      //get HTTP error code
      console.log(error.reponse.status)
    } else {
      console.log(error.message)
    }
  })

  async function postData () {
    const food = {
      name: "Bread",
      weight: 450,
      quantity: 3
    }
  
    try {
      const response = await axios.post("/food", food)
      console.log(response)
    } catch (error) {
      if (error.response) {
        console.log(error.reponse.status)
      } else {
        console.log(error.message)
      }
    }
  }

  postData();