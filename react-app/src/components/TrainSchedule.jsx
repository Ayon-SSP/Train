import React, { useEffect, useState } from 'react';

function TrainSchedule() {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    fetchTrainData();
  }, []);

  async function fetchTrainData() {
    try {
      // const response = await fetch('your-api-url');
      const data = [
        {
          trainName: 'Hyderabad Exp',
          trainNumber: '2341',
          departureTime: { Hours: 23, Minutes: 55, Seconds: 0 },
          seatsAvailable: { sleeper: 6, AC: 7 },
          price: { sleeper: 554, AC: 1854 },
          delayedBy: 5
        },
        {
          trainName: 'Patna Exp',
          trainNumber: '2340',
          departureTime: { Hours: 6, Minutes: 10, Seconds: 0 },
          seatsAvailable: { sleeper: 10, AC: 1 },
          price: { sleeper: 416, AC: 553 },
          delayedBy: 0
        },
        {
          trainName: 'Mysore Exp',
          trainNumber: '2347',
          departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
          seatsAvailable: { sleeper: 2, AC: 2 },
          price: { sleeper: 440, AC: 573 },
          delayedBy: 8
        },
        {
          trainName: 'Srinagar Exp',
          trainNumber: '2349',
          departureTime: { Hours: 14, Minutes: 55, Seconds: 0 },
          seatsAvailable: { sleeper: 1, AC: 0 },
          price: { sleeper: 917, AC: 1004 },
          delayedBy: 10
        },
        {
          trainName: 'Kolkata Exp',
          trainNumber: '2345',
          departureTime: { Hours: 20, Minutes: 15, Seconds: 0 },
          seatsAvailable: { sleeper: 16, AC: 70 },
          price: { sleeper: 530, AC: 630 },
          delayedBy: 14
        },
        {
          trainName: 'Mumbai Exp',
          trainNumber: '2343',
          departureTime: { Hours: 22, Minutes: 37, Seconds: 0 },
          seatsAvailable: { sleeper: 8, AC: 15 },
          price: { sleeper: 510, AC: 610 },
          delayedBy: 16
        },
        {
          trainName: 'Cochin Exp',
          trainNumber: '2348',
          departureTime: { Hours: 15, Minutes: 55, Seconds: 0 },
          seatsAvailable: { sleeper: 1, AC: 0 },
          price: { sleeper: 707, AC: 994 },
          delayedBy: 11
        },
        {
          trainName: 'Amritsar Exp',
          trainNumber: '2346',
          departureTime: { Hours: 19, Minutes: 0, Seconds: 0 },
          seatsAvailable: { sleeper: 15, AC: 10 },
          price: { sleeper: 570, AC: 770 },
          delayedBy: 13
        },
        {
          trainName: 'Pune Exp',
          trainNumber: '2342',
          departureTime: { Hours: 23, Minutes: 0, Seconds: 0 },
          seatsAvailable: { sleeper: 6, AC: 7 },
          price: { sleeper: 854, AC: 1854 },
          delayedBy: 5
        },
        {
          trainName: 'Delhi Exp',
          trainNumber: '2343',
          departureTime: { Hours: 9, Minutes: 45, Seconds: 0 },
          seatsAvailable: { sleeper: 32, AC: 1 },
          price: { sleeper: 470, AC: 1458 },
          delayedBy: 3
        },
        {
          trainName: 'Sikkim Exp',
          trainNumber: '2345',
          departureTime: { Hours: 11, Minutes: 23, Seconds: 0 },
          seatsAvailable: { sleeper: 4, AC: 4 },
          price: { sleeper: 726, AC: 1502 },
          delayedBy: 5
        },
        {
          trainName: 'Cuttack Exp',
          trainNumber: '2346',
          departureTime: { Hours: 12, Minutes: 3, Seconds: 0 },
          seatsAvailable: { sleeper: 10, AC: 1 },
          price: { sleeper: 424, AC: 563 },
          delayedBy: 6
        },
        {
          trainName: 'Bokaro Exp',
          trainNumber: '2347',
          departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
          seatsAvailable: { sleeper: 55, AC: 0 },
          price: { sleeper: 268, AC: 458 },
          delayedBy: 7
        },
        {
          trainName: 'Panjim Exp',
          trainNumber: '2349',
          departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
          seatsAvailable: { sleeper: 2, AC: 1 },
          price: { sleeper: 389, AC: 542 },
          delayedBy: 9
        },
        {
          trainName: 'Jodhpur Exp',
          trainNumber: '2344',
          departureTime: { Hours: 11, Minutes: 0, Seconds: 0 },
          seatsAvailable: { sleeper: 33, AC: 13 },
          price: { sleeper: 563, AC: 674 },
          delayedBy: 4
        },
        {
          trainName: 'Chennai Exp',
          trainNumber: '2344',
          departureTime: { Hours: 21, Minutes: 35, Seconds: 0 },
          seatsAvailable: { sleeper: 3, AC: 2 },
          price: { sleeper: 533, AC: 635 },
          delayedBy: 15
        },
        {
          trainName: 'Gandhinagar Exp',
          trainNumber: '2341',
          departureTime: { Hours: 7, Minutes: 15, Seconds: 0 },
          seatsAvailable: { sleeper: 15, AC: 5 },
          price: { sleeper: 532, AC: 765 },
          delayedBy: 0
        },
        {
          trainName: 'Aizawl Exp',
          trainNumber: '2342',
          departureTime: { Hours: 8, Minutes: 30, Seconds: 0 },
          seatsAvailable: { sleeper: 18, AC: 7 },
          price: { sleeper: 1142, AC: 1773 },
          delayedBy: 2
        },
        {
          trainName: 'Lucknow Exp',
          trainNumber: '2347',
          departureTime: { Hours: 17, Minutes: 33, Seconds: 0 },
          seatsAvailable: { sleeper: 5, AC: 3 },
          price: { sleeper: 238, AC: 353 },
          delayedBy: 12
        }
      ];
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
      <h2>Train Schedule</h2>
      {trainData.length > 0 ? (
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
      )}
      <h1>New</h1>
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
              <td>{train.trainName}</td>
              <td>{train.trainNumber}</td>
              <td>{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</td>
              <td>
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
  );
}

export default TrainSchedule;