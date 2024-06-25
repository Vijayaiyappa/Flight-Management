
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Insert from './Insert';
import Navbar from './Navbar';
import { Toast } from 'primereact/toast';
import Delete from './Delete';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';

function App() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [flag, setFlag] = useState(false)
  const [data, setData] = useState([])
  const toast = useRef(null);



  const onInputChange = (e) => {
    setGlobalFilter(e.target.value);
  };
  const handleItemClick = (e) => {
    setFlag(false)
  }



  const acceptDelete = (idToDelete) => {

    toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Item has been deleted', life: 3000 });
    Delete(idToDelete).then(() => { fetchData() })

  };




  const confirm1 = (event, data) => {

    confirmPopup({
      target: event.currentTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      accept: () => acceptDelete(data.id),

    });

  };



  const [flightData, setFlightData] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:8000/home/create_update_flight');
      const data = await response.json();
      setFlightData(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {


    fetchData();
  }, []);
  const filterHeader = (
    <div className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText type="search" placeholder="Global Search" onChange={onInputChange} />
    </div>
  );
  const ListView = () => {
    fetchData()
    setFlag(false)

  }
  const InsertData = (data) => {

    setData(data)
    setFlag(true)
  }

  const EditUpdate = (rowData) => {

    return (
      <>
        <Toast ref={toast}></Toast>

        <Button onClick={(event) => confirm1(event, rowData)} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
        <Button onClick={(event) => InsertData(rowData)} icon="pi pi-pencil" label="Update"></Button>

      </>
    )
  }
  var header = <div style={{ textAlign: 'right' }}><Button type="button" icon="plus" iconPos="left" label="Add" onClick={InsertData}></Button></div>;




  return (
    <>
      <Navbar app={handleItemClick}></Navbar>
      <ConfirmPopup />

      {flag != true ? (<DataTable value={flightData} globalFilter={globalFilter}
        header={header} responsive={"true"} paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      >
        <Column field="flight_number" header="Flight Number" sortable filter />
        <Column field="flight_date" header="Flight Date" sortable filter />
        <Column field="departure_location" header="Departure Location" sortable filter />
        <Column field="departure_time" header="Departure Time" sortable filter />
        <Column field="arrival_location" header="Arrival Location" sortable filter />
        <Column field="estimated_arrival_time" header="Estimated Arrival Time" sortable filter />

        <Column body={EditUpdate} header="Operation"></Column>


      </DataTable>

      ) :

        (
          <>
            <Insert data={data} handleApp={ListView} />
          </>
        )}


    </>
  );
}

export default App;