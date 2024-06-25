
// import React from 'react'; 
import { Card } from 'primereact/card';

import React, { useState, useEffect } from "react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

import { parseTimeString, convertDateTOString, ConvertTime } from './Utlis/Controller';

import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';


export default function Insert({ data, handleApp }) {


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFlightData({
      ...flightData,
      [name]: type === 'checkbox' ? checked : value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', flightData);
  };

  const [flightData, setFlightData] = useState({
    flight_number: '',
    outbound_code: '',
    flight_date: null,
    filed_by: '',
    filing_time: null,
    departure_location: '',
    departure_time: null,
    arrival_location: '',
    estimated_arrival_time: null,
    flight_route: '',
    battery_number: '',
    aircraft_name: '',
    ground_crew: '',
    airspace_clearance: false,
    gc_power: false,
    anemometer_data: false,
    wp_details: false,
    wp_heading: false,
    mission_status: false,
    mission_choice: false,
    gc_power: false,
    windy_data: false,
    windy_data_cm: '',
    anemometer_data_cm: '',
    wp_heading_cm: '',
    wp_details_cm: '',




  });




  useEffect(() => {
    function check() {


      if (data.id) {

        setFlightData({
          id: data.id,
          flight_number: data.flight_number,
          flight_date: new Date(data.flight_date),
          filed_by: data.filed_by,
          filing_time: parseTimeString(data.filing_time),
          departure_location: data.departure_location,
          departure_time: parseTimeString(data.departure_time),
          arrival_location: data.arrival_location,
          estimated_arrival_time: parseTimeString(data.estimated_arrival_time),
          airspace_clearance: data.airspace_clearance,
          gc_power: data.gc_power,
          anemometer_data: data.anemometer_data,
          wp_details: data.wp_details,
          wp_heading: data.wp_heading,
          mission_status: data.mission_status,
          mission_choice: data.mission_choice,
          gc_power: data.gc_power,
          windy_data: data.windy_data,
          windy_data_cm: data.windy_data_cm,
          anemometer_data_cm: data.anemometer_data_cm,
          wp_heading_cm: data.wp_heading_cm,
          wp_details_cm: data.wp_details_cm,

        })
      }
      else {
        setFlightData({
          flight_number: '',
          outbound_code: '',
          flight_date: null,
          filed_by: '',
          filing_time: null,
          departure_location: '',
          departure_time: null,
          arrival_location: '',
          estimated_arrival_time: null,
          flight_route: '',
          battery_number: '',
          aircraft_name: '',
          ground_crew: '',
          windy_data: false,
          windy_data_cm: '',
          gcPowerComment: '',
          mission_choice_cm: '',
          mission_choice_cm: ''
        })
      }
    }
    check()

  }, [])


  const SubmitV = async () => {
    const post_or_put = flightData.id ? "PUT" : "POST"
    const url_str = flightData.id ? "http://127.0.0.1:8000/home/flights/" + flightData.id + "/" : "http://127.0.0.1:8000/home/create_update_flight"
    console.log(flightData.airspace_clearance)
    await fetch(url_str, {

      method: post_or_put,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "flight_number": flightData.flight_number,
        "flight_date": convertDateTOString(flightData.flight_date),
        "filed_by": flightData.filed_by,
        "filing_time": ConvertTime(flightData.filing_time),
        "departure_location": flightData.departure_location,
        "departure_time": ConvertTime(flightData.departure_time),
        "arrival_location": flightData.arrival_location,
        "estimated_arrival_time": ConvertTime(flightData.estimated_arrival_time),
        "airspace_clearance": flightData.airspace_clearance,
        "gc_power": flightData.gc_power,
        "anemometer_data": flightData.anemometer_data,
        "wp_detail": flightData.wp_details,
        "wp_heading": flightData.wp_heading,
        "mission_status": flightData.mission_status,
        "mission_choice": flightData.mission_choice,
        "windy_data": flightData.windy_data,
        "windy_data_cm": flightData.windy_data_cm,
        "anemometer_data_cm": flightData.anemometer_data_cm,
        "wp_heading_cm": flightData.wp_heading_cm,
        "wp_details_cm": flightData.wp_details_cm,
        "mission_choice_cm": flightData.mission_choice_cm,
        "gc_power_cm": flightData.gc_power_cm

      }),
    })
    handleApp()

  }






  return (
    <div style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 70, paddingBottom: 50 }}>
      <form onSubmit={handleSubmit}>
        <div className="card flex flex-wrap gap-3 p-fluid" >
          <div className="flex-auto"  >
            <label htmlFor="flight_number" className="font-bold block mb-2">Flight Number</label>
            <InputText id="flight_number" className="p-inputtext-lg" value={flightData.flight_number} onChange={(e) => setFlightData({ ...flightData, flight_number: e.target.value })} />
          </div>
          <div className="flex-auto"  >
            <label htmlFor="flight_date" className="font-bold block mb-2">Flight Date</label>
            <Calendar id="flight_date" className="p-inputtext-lg" value={flightData.flight_date} onChange={(e) => setFlightData({ ...flightData, flight_date: e.value })} />
          </div>
          <div className="flex-auto"  >
            <label htmlFor="filed_by" className="font-bold block mb-2">Filed By</label>
            <InputText id="filed_by" className="p-inputtext-lg" value={flightData.filed_by} onChange={(e) => setFlightData({ ...flightData, filed_by: e.target.value })} />
          </div>
          <div className="flex-auto"  >
            <label htmlFor="filing_time" className="font-bold block mb-2">Filing Time</label>
            <Calendar id="filing_time" className="p-inputtext-lg" value={flightData.filing_time} timeOnly showTime onChange={(e) => setFlightData({ ...flightData, filing_time: e.value })} />
          </div>
          <div className="flex-auto"  >
            <label htmlFor="departure_location" className="font-bold block mb-2">Departure Location</label>
            <InputText id="departure_location" className="p-inputtext-lg" value={flightData.departure_location} onChange={(e) => setFlightData({ ...flightData, departure_location: e.target.value })} />
          </div>
          <div className="flex-auto"  >
            <label htmlFor="departure_time" className="font-bold block mb-2">Departure Time</label>
            <Calendar id="departure_time" className="p-inputtext-lg" value={flightData.departure_time} timeOnly showTime onChange={(e) => setFlightData({ ...flightData, departure_time: e.value })} />
          </div>
          <div className="flex-auto"  >
            <label htmlFor="arrival_location" className="font-bold block mb-2">Arrival Location</label>
            <InputText id="arrival_location" className="p-inputtext-lg" value={flightData.arrival_location} onChange={(e) => setFlightData({ ...flightData, arrival_location: e.target.value })} />
          </div>
          <div className="flex-auto"  >
            <label htmlFor="estimated_arrival_time" className="font-bold block mb-2">Estimated Arrival Time</label>
            <Calendar id="estimated_arrival_time" className="p-inputtext-lg" value={flightData.estimated_arrival_time} timeOnly showTime onChange={(e) => setFlightData({ ...flightData, estimated_arrival_time: e.value })} />
          </div>


        </div>
        <div  >
          <Card title="Preflight Checks" className="table-container"  >
            <table className="table">
              <thead>
                <tr>
                  <th>Checks</th>
                  <th>Status</th>
                  <th>Comment(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Check Digital Sky for airspace clearance</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="airspace_clearance" name="airspace_clearance" checked={flightData.airspace_clearance} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="anemometer_data_cm" name="anemometer_data_cm" value={flightData.anemometer_data_cm} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>WINDY DATA - at 0m alt and 100m alt</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="windy_data" name="windy_data" checked={flightData.windy_data} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="windy_data_cm" name="windy_data_cm" value={flightData.windy_data_cm} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>Anemometer wind speed & Wind Direction</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="anemometer_data" name="anemometer_data" checked={!!flightData.anemometer_data} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="anemometer_data_cm" name="anemometer_data_cm" value={flightData.anemometer_data_cm} onChange={handleChange} />
                  </td>
                </tr>

                <tr>
                  <td>Inform the GC to power up the aircraft</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="gc_power" name="gc_power" checked={flightData.gc_power} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="gcPowerComment" name="gcPowerComment" value={flightData.gcPowerComment} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>Choose the respective mission</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="mission_choice" name="mission_choice" checked={!!flightData.mission_choice} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="mission_choice_cm" name="mission_choice_cm" value={flightData.mission_choice_cm} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>Write and read the mission</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="mission_status" name="mission_status" checked={!!flightData.mission_status} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="mission_status_cm" name="mission_status_cm" value={flightData.mission_choice_cm} onChange={handleChange} rows={3} />
                  </td>
                </tr>
                <tr>
                  <td>Reconfirm WP heading</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="wp_heading" name="wp_heading" checked={!!flightData.wp_heading} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="wp_heading_cm" name="wp_heading_cm" value={flightData.wp_heading_cm} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>Check WP numbering & altitudes</td>
                  <td className="checkbox-container">
                    <Checkbox inputId="wp_details" name="wp_details" checked={!!flightData.wp_details} onChange={handleChange} />
                  </td>
                  <td>
                    <InputTextarea rows={5} cols={50} autoResize id="wp_details_cm" name="wp_details_cm" value={flightData.wp_details_cm} onChange={handleChange} />
                  </td>
                </tr>



              </tbody>
            </table>
            <div className="button-container" style={{ marginLeft: 1000 }}>
              <Button label="Submit" onClick={SubmitV} />
            </div>
          </Card>
        </div>
      </form>

    </div>

  )
}
