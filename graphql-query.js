# rite your query or mutation here

query{
  products{
    data{
      attributes{
        title
        price
        description
        image{
          data{
            attributes{
              width
              url
            }
          }
        }
      }
    }
  }
}
