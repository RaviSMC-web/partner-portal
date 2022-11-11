import React from 'react';
import ProductSlider from '../../common-components/carousal/SlickSlider';

const ClientScheme = () => {

    const items = [
        {
          title: "Normal Scheme",
          subtitle: "No. of Normal Scheme Wise Clients",
          client: "12 Clients Today",
          cardcolor:'#EFF7FF'
        },
        {
          title: "AMC Free Conditional",
          subtitle: "No. of AMC Free Conditional Cliends",
          client: "12 Clients Today",
          cardcolor:'#EFF7FF'
        },
        {
          title: "Five Years Free AMC",
          subtitle: "No. of Five Years Free AMC Cliends",
          client: "15 Clients Today",
          cardcolor:'#EFF7FF'
        },
        {
            title: "Normal Scheme",
            subtitle: "No. of Normal Scheme Wise Clients",
            client: "12 Clients Today",
            cardcolor:'#EFF7FF'
          },
          {
            title: "AMC Free Conditional",
            subtitle: "No. of AMC Free Conditional Cliends",
            client: "12 Clients Today",
            cardcolor:'#EFF7FF'
          },
          {
            title: "Five Years Free AMC",
            subtitle: "No. of Five Years Free AMC Cliends",
            client: "15 Clients Today",
            cardcolor:'#EFF7FF'
          },
      ];

  return (
    
    <>
     
                        <h3>Clients Scheme Wise Cards</h3>
                        <ProductSlider items={items} />
                       
     
    </>
  )
}

export default ClientScheme;