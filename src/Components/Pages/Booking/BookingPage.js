import { useState, useEffect } from "react";
import BookingForm from "./Components/BookingForm";

function BookingPage() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/flights/allflights")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <BookingForm flights={flights}></BookingForm>
  );
}

export default BookingPage;
