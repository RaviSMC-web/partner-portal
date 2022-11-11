import React from 'react';
import { Card } from "primereact/card";
import followImg from '../../pics/card_follow.png'
import cardTwo from '../../pics/card_IPO.png'
import cardThree from '../../pics/card_offers.png'



const BottomCards = () => {

  return (
    <>
    <h3 style={{ marginLeft: 20 }}>Cards</h3>
    <Card className="m-4">
        {/* <Stack 
        direction="row"
        spacing={2}
        > */}
          <div className="grid">
          <div className="col-12 md:col-6 lg:col-4 sm:col-12 xs:col-12">
<div className='bottom_cards'>
    <p>Follow up <br />
for the day</p>
<img src={followImg} alt="cal" />
</div>
</div>
<div className="col-12 md:col-6 lg:col-4 sm:col-12 xs:col-12">
<div className='bottom_cards' style={{background: '#895BF1'}}>
    <p>IPO <br />
Details</p>
<img src={cardTwo} alt="cal1" />
</div>
</div>
<div className="col-12 md:col-6 lg:col-4 sm:col-12 xs:col-12">
<div className='bottom_cards' style={{background: '#60CEF1'}}>
    <p>Running <br />
Offers</p>
<img src={cardThree} alt="cal2" />
</div>
</div>
</div>
{/* </Stack> */}
    </Card>
    </>
  )
}

export default BottomCards