import React from 'react'
import styles from './Overview.module.css';

const baseURL = "https://hackaburg22.herokuapp.com/";

const getTime = () => {
  var now = new Date();
  var pretty = [
    now.getHours(),
    ':',
    (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
  ].join('');
  return pretty
}

const getDate = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var now = new Date();
  var pretty = [
    now.toLocaleString('en-us', { weekday: 'long' }),
    ', ',
    now.getDate(),
    ' ',
    monthNames[now.getMonth()],
    ' ',
    now.getFullYear(),
  ].join('');
  return pretty
}

function Overview() {
  const [totalEmps, setTotalEmp] = React.useState("-");
  const [totalEmpsWorking, setTotalEmpsWorking] = React.useState("-");
  const [totalRooms, setTotalRooms] = React.useState("-");
  const [totalBusyRoom, setTotalBusyRoom] = React.useState("-");
  const [diets, setDiets] = React.useState({ "no_food": "-", "meat": "-", "vegetarian": "-", "vegan": "-" });
  // const [totalRooms, setTotalEmp] = React.useState("-");
  // const [totalRooms, setTotalEmp] = React.useState("-");

  React.useEffect(() => {
    fetch(baseURL + "total_employees/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTotalEmp(data.total_number_workers);
      });

    fetch(baseURL + "nb_workers_today/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTotalEmpsWorking(data.number_workers);
      });

    fetch(baseURL + "total_rooms/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTotalRooms(data.number_rooms);
      });

    fetch(baseURL + "rooms_today/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTotalBusyRoom(data.nb_used_rooms);
      });

    // food data
    fetch(baseURL + "diets_today/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDiets(data);
      });

    // fetch(baseURL + "rooms_today/")
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   setTotalBusyRoom(data.number_of_rooms);
    // });




  }, []);

  return (
    <div>
      <div className={styles.d1}>
        {getTime()}
      </div>
      <div className={styles.d2}>
        {getDate()}
      </div>
      <div className="row mt-5 ms-5 me-5">
        <div className="col-6 text-start">
          Total number of workers
        </div>
        <div className="col-6 text-end">
          {totalEmps}
        </div>
        <div className="mt-2"></div>
        <div className="col-6 text-start">
          Expected number of workers
        </div>
        <div className="col-6 text-end">
          {totalEmpsWorking}
        </div>
      </div>

      <div className="row mt-4 ms-5 me-5">
        <div className="col-6 text-start">
          Available rooms
        </div>
        <div className="col-6 text-end">
          {totalRooms}
        </div>
        <div className="mt-2"></div>
        <div className="col-6 text-start">
          Rooms needed for today
        </div>
        <div className="col-6 text-end">
          {totalBusyRoom}
        </div>
      </div>

      {/* food data */}
      <div className="row mt-4 ms-5 me-5">
        <div className="col-12">
          Diets overview
        </div>
        <div className="mt-2"></div>
        <div className="col-6 text-start">
          No Food
        </div>
        <div className="col-6 text-end">
          {diets.no_food}
        </div>
        <div className="mt-2"></div>
        <div className="col-6 text-start">
          Meat
        </div>
        <div className="col-6 text-end">
          {diets.meat}
        </div>
        <div className="mt-2"></div>
        <div className="col-6 text-start">
          Vegetarian
        </div>
        <div className="col-6 text-end">
          {diets.vegetarian}
        </div>
        <div className="mt-2"></div>
        <div className="col-6 text-start">
          Vegan
        </div>
        <div className="col-6 text-end">
          {diets.vegan}
        </div>
      </div>
    </div>
  )
}

export default Overview