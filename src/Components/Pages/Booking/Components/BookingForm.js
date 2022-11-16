import { useState } from "react";

function BookingForm(props) {
  const [destinations, setDestinations] = useState();
  const [loadingDestinations, setLoadingDestinations] = useState(true);

  let origins = [
    ...new Map(
      props.flights.map((flight) => [
        flight.origin,
        { origin: flight.origin, id: flight.id },
      ])
    ).values(),
  ];

  const originSelectedHandler = (event) => {
    console.log("Selected origin");
    console.log(event.target.value);
    const origin = event.target.value;
    const dest = props.flights.filter((flight) => flight.origin === origin);
    console.log("Destinations");
    console.log(dest);
    setLoadingDestinations(false);
    setDestinations(dest);
  };

  return (
    <div className="container ">
      <br></br>
      <form>
        <fieldset>
          <legend>Flight Information</legend>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="exampleSelect1" className="form-label mt-4">
                ORIGIN
              </label>
              <select
                className="form-select"
                id="exampleSelect1"
                onChange={originSelectedHandler}
              >
                <option disabled selected>
                  {" "}
                  -- select an option --{" "}
                </option>
                {origins.map((item) => {
                  return (
                    <option value={item.origin} key={item.id}>
                      {item.origin}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="exampleSelect1" className="form-label mt-4">
                DESTINATION
              </label>
              <select className="form-select" id="exampleSelect1">
                <option disabled selected>
                  {" "}
                  -- select an origin --{" "}
                </option>
                {loadingDestinations ? (
                  <option value="Loading" disabled>
                    Loading.....
                  </option>
                ) : (
                  destinations.map((dest) => (
                    <option value={dest.destination} key={dest.id}>
                      {" "}
                      {dest.destination}{" "}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="exampleSelect1" className="form-label mt-4">
                1 Way or Round Trip?
              </label>
              <select className="form-select" id="exampleSelect1">
                <option>1 Way Trip</option>
                <option>Round Trip</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dateOfDeparture" className="form-label mt-4">
                Date of Departure:
              </label>
              <input
                className="form-date"
                type="date"
                id="departureDate"
                name="dateOfDeparture"
              ></input>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-info mt-4 ">
                Search
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingForm;
