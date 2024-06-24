
import React from 'react'; 
import { Menubar } from 'primereact/menubar';


export default function Navbar({app}) {
    const items = [
        {
            label: 'Flight Management system',
            icon: 'pi pi-home',
            command: () => app('/home'),
        },
       
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        