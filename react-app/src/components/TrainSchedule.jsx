import React, { useEffect, useState } from 'react';
import '../style/TrainTable.css';
import axios from 'axios';

function TrainSchedule() {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    fetchTrainData();
  }, []);

  async function fetchTrainData() {
    try {
      // const response = await fetch('your-api-url');
      const response = await axios.get('http://localhost:3000/');
      const data = response.data;

      const sortedData = sortTrains(data);
      setTrainData(sortedData);
      console.log('Train data:', sortedData);
    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  }

  function sortTrains(trains) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    return trains
      .filter(train => {
        const departureTime = train.departureTime.Hours * 60 + train.departureTime.Minutes + train.delayedBy;
        return departureTime > currentTime + 30; // Exclude trains departing in the next 30 minutes
      })
      .sort((a, b) => {
        if (a.price.sleeper !== b.price.sleeper) {
          return a.price.sleeper - b.price.sleeper;
        }

        if (a.seatsAvailable.sleeper !== b.seatsAvailable.sleeper) {
          return b.seatsAvailable.sleeper - a.seatsAvailable.sleeper;
        }

        const aDepartureTime = a.departureTime.Hours * 60 + a.departureTime.Minutes + a.delayedBy;
        const bDepartureTime = b.departureTime.Hours * 60 + b.departureTime.Minutes + b.delayedBy;
        return bDepartureTime - aDepartureTime;
      });
  }

  return (
    <div>
      {/* {trainData.length > 0 ? (
        <ul>
          {trainData.map(train => (
            <li key={train.trainNumber}>
              <h3>{train.trainName}</h3>
              <p>Train Number: {train.trainNumber}</p>
              <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
              <p>Seats Available - Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</p>
              <p>Price - Sleeper: {train.price.sleeper}, AC: {train.price.AC}</p>
              <p>Delayed By: {train.delayedBy} minutes</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading train schedule...</p>
      )} */}
      <h1>Train Schedule</h1>
      <div className='maincss'>
        <table>
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>Departure Time</th>
              <th>Seats Available</th>
              <th>Price</th>
              <th>Delayed By (minutes)</th>
            </tr>
          </thead>
          <tbody>
            {trainData.map((train, index) => (
              <tr key={index}>
                <td className='select' >{train.trainName}</td>
                <td className='select' >{train.trainNumber}</td>
                <td className='select' >{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</td>
                <td className='select' >
                  Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}
                </td>
                <td>
                  Sleeper: {train.price.sleeper}, AC: {train.price.AC}
                </td>
                <td>{train.delayedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrainSchedule;