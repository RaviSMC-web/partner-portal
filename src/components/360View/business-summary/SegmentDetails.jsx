
import React, { useState, useRef } from 'react';
import { ProductService } from '../../common-components/tables/ProductService';
import DataTableMain from '../../common-components/tables/DataTableMain';

export const SegmentDetails = () => {
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
                 