
import React, { useState, useRef } from 'react';
import { ProductService } from '../../common-components/tables/ProductService';
import DataTableMain from '../../common-components/tables/DataTableMain';

export const DetailsView = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const dt = useRef(null);
    const productService = new ProductService();

    const cols = [
        { field: 'code', header: 'Period' },
        { field: 'name', header: 'Equity' },
        { field: 'category', header: 'Commodity' },
        { field: 'id', header: 'Currency' },
        { field: 'description', header: 'Total' },
        
    ];

    return (
        <div>
            <div className="seg_details">

                <DataTableMain 
                products={products}
                setProducts={setProducts}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                dt={dt}
                productService={productService}
                cols={cols}
                />
            </div>
        </div>
    );
}
                 