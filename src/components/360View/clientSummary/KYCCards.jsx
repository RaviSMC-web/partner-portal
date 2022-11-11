import React from 'react';
import ProductSlider from '../../common-components/carousal/SlickSlider';

const KYCCards = () => {

    const items = [
        {
          title: "New KYC Today",
          subtitle: "No. of KYC received Today",
          client: "12 Clients Today",
          cardcolor:'#EFF7FF'
        },
        {
          title: "Received Till Yesterday",
          subtitle: "No. of KYC received till Yesterday",
          client: "12 Clients Today",
          cardcolor:'#EFF7FF'
        },
        {
          title: "Pending",
          subtitle: "No. of KYC in Pending",
          client: "15 Clients Today",
          cardcolor:'#EFF7FF'
        },
        {
            title: "New KYC Today",
            subtitle: "No. of KYC received Today",
            client: "12 Clients Today",
            cardcolor:'#EFF7FF'
          },
          {
            title: "Received Till Yesterday",
            subtitle: "No. of KYC received till Yesterday",
            client: "12 Clients Today",
            cardcolor:'#EFF7FF'
          },
          {
            title: "Pending",
            subtitle: "No. of KYC in Pending",
            client: "15 Clients Today",
            cardcolor:'#EFF7FF'
          },
      ];

  return (
    
    <>
    
   
                        <h3>KYC Report Cards</h3>
                        <ProductSlider items={items} />
                        
     
    </>
  )
}

export default KYCCards