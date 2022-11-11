
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

const KnobDemo = ({ clientData }) => {
    const [value7, setValue7] = useState(40);
console.log('eeee', clientData);
    return (
        <div>
            <div className="card">
                <div className="grid formgrid text-center">
                    <div className="field col-12 md:col-4">
                        
                        <Knob value={clientData ? clientData : 0} strokeWidth={5} onChange={(e) => setValue7(e.value)}/>
                    </div>
                   
                </div>
            </div>

           
        </div>
    )
}
        export default KnobDemo;         