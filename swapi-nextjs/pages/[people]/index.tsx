import React from "react";
const StarWarsPeople = () => {
    return(
        <h1>People</h1>
    )
}

export async function getServerSideProps(context) {
    return {
        
      props: {}, // will be passed to the page component as props
    }
  }

export default StarWarsPeople;