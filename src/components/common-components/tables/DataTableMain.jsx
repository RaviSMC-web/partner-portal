
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

const DataTableMain = ({products, setProducts, selectedProducts, setSelectedProducts, dt, productService, cols}) => {

    const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    }

    const exportPdf = () => {
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            })
        })
    }

    const exportExcel = () => {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'products');
        });
    }

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then(module => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    }

    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    }

    const header = (
        <div className="flex justify-content-flex-end export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success  " data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning " data-pr-tooltip="PDF" />
        </div>
    );

    return (
        <div>
            <div className="seg_details">

                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={products} header={header} dataKey="id" responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedProducts} onSelectionChange={onSelectionChange}>
                    {
                        cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                    }
                </DataTable>
            </div>
        </div>
    );
}

export default DataTableMain;