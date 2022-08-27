import { useState } from "react";
import { DropDown } from "../../assets";
import "./style.css";
import { Card } from "./subcomponent/Card";
import {
  getSearchFilteredData,
  getLocationFilteredData,
  getPropertyFilteredData,
  getPriceRangeFilteredData,
  getDateFilteredData,
} from "../../function";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  setPrice,
  setPropertyType,
  setDate,
  clearFilters,
} from "../../features/home/filtersSlice";
import data from "../../data/data.json";

export const Main = () => {
  const dispatch = useDispatch();
  const { location, propertyType, price, dateText } = useSelector(
    (state) => state.filters
  );

  const [searchText, setSearchText] = useState("");
  const [estateData, setData] = useState(data.estate);

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const getFilteredData = () => {
    const searchFilteredData = getSearchFilteredData(data.estate, searchText);
    const locationFilteredData = getLocationFilteredData(
      searchFilteredData,
      location
    );
    const dateFilteredData = getDateFilteredData(
      locationFilteredData,
      dateText
    );
    const propertyFilterdData = getPropertyFilteredData(
      dateFilteredData,
      propertyType
    );
    const priceRangeFilteredData = getPriceRangeFilteredData(
      propertyFilterdData,
      price
    );
    setData(priceRangeFilteredData);
  };

  return (
    <main className="main">
      <section className="main-head-wrapper">
        <div className="main-heading">Search properties To rent</div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search with Search Bar"
            value={searchText}
            onChange={changeHandler}
          />
          <span>
            <DropDown />
          </span>
        </div>
      </section>
      <section className="filters-wrapper">
        <div className="filters">
          <span>Location</span>
          <select
            name="location"
            id="location"
            className="hidden-select"
            onChange={(e) => dispatch(setLocation(e.target.value))}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="Pune">Pune, Maharastra</option>
            <option value="Patna">Patna, Bihar</option>
            <option value="Mumbai">Mumbai, Maharastra</option>
            <option value="Bangaluru">Bangaluru, Karnataka</option>
          </select>
        </div>
        <div className="filters">
          <span>When</span>
          <select
            name="date"
            id="date"
            className="hidden-select"
            onChange={(e) => dispatch(setDate(e.target.value))}
          >
            <option value="none" selected disabled hidden>
              Select-max-shift-date
            </option>
            <option value="10-2022">Oct,2022</option>
            <option value="11-2022">Nov,2022</option>
            <option value="12-2022">Dec,2022</option>
            <option value="1-2023">Jan, 2023</option>
            <option value="2-2023">Feb, 2023</option>
            <option value="3-2023">March,2023</option>
            <option value="4-2023">April, 2023</option>
            <option value="5-2023">May,2023</option>
            <option value="6-2023">June,2023</option>
            <option value="7-2023">July,2023</option>
            <option value="8-2023">August,2023</option>
          </select>
        </div>
        <div className="filters">
          <span>Price</span>
          <select
            name="price"
            id="price"
            className="hidden-select"
            onChange={(e) => dispatch(setPrice(e.target.value))}
          >
            <option value="none" selected disabled hidden>
              Select Price
            </option>
            <option value="10000-20000">10k-20k</option>
            <option value="20000-30000">20k-30k</option>
            <option value="30000-40000">30k-40k</option>
            <option value="40000-50000">40k-50k</option>
          </select>
        </div>
        <div className="filters">
          <span>Property Type</span>
          <select
            name="propertyType"
            id="propertytype"
            className="hidden-select"
            onChange={(e) => dispatch(setPropertyType(e.target.value))}
          >
            <option value="none" selected disabled hidden>
              Select Property Type
            </option>
            <option value="Flat">Flat</option>
            <option value="Banglow">Banglow</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <button
          className="btn signup-btn"
          onClick={() => getFilteredData(data.estate)}
        >
          Search
        </button>
      </section>
      <section>
        <ul className="card-wrapper">
          {estateData.length < 1 ? (
            <div style={{textAlign:"center",width:"100vw"}}>
             <div>Nothing Found as per your query :(</div> 
              <button className="btn login-btn"
                onClick={() => {
                  dispatch(clearFilters());
                  setData(data.estate);
                  setSearchText("")
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            estateData.map((es) => <Card estate={es} key={es.id} />)
          )}
        </ul>
      </section>
    </main>
  );
};
