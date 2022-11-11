import React, { useState, useRef } from 'react'
import ClientScheme from './ClientScheme'
import KYCCards from './KYCCards'
import { ProductService } from '../../common-components/tables/ProductService';
import DataTableMain from '../../common-components/tables/DataTableMain';
import { Card } from 'primereact/card';

const ClientSummary = () => {

  const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const dt = useRef(null);
    const productService = new ProductService();

    const cols = [
        { field: 'code', header: 'Segments' },
        { field: 'name', header: 'No. of Clients' },
        { field: 'category', header: 'Brokerage Concentration' }
    ];
    
  return (
    <>
    <div>
   <KYCCards />
   <div>
   <ClientScheme />
   </div>
   <Card style={{marginRight: 10}}>
   <DataTableMain 
                products={products}
                setProducts={setProducts}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                dt={dt}
                productService={productService}
                cols={cols}
                />
                </Card>
                </div>
    </>
  )
}

export default ClientSummary