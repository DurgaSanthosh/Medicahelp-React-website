import React from "react";
const Booking = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div class="mb-3 my-4">
            <label for="exampleFormControlInput1" class="form-label ">
              Enter Your Location :
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Location"
            />
          </div>
          <div class="form-check">
            <p>Do you want ambulance with or without cylinder ?</p>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>

          <div class="form-check">
            <p>Do you want ambulance with or without cylinder ?</p>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
          <br />
          <p>Nearest Hospital Selected (Tap to view or change)</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>SCHIC Medical Centre</option>
            <option value="1"> Hospital One</option>
            <option value="2">Hospital Two</option>
            <option value="3">Hospital 3</option>
          </select>
          <button type="button" class="btn btn-outline-primary my-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Booking;
