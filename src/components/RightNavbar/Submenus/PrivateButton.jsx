import React, { useState } from 'react';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

const PrivateButton = () => {
    const [value, setValue] = useState('protected');
    const options = [
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div>
            <div className="card">
                <div className="field-checkbox m-0">
                    <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
                    {/* <label>{value}</label> */}
                </div>
            </div>
        </div>
    );
}

export default PrivateButton;