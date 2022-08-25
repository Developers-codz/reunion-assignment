import React from 'react'

export const Filters = () => {
  return (
    <section className="filters-wrapper">
    <div className="filters">
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location-finder"
        id="location"
        value="Pune, Maharastra"
      />
    </div>
    <div className="filters">
      <label htmlFor="location">When</label>
      <input
      className="date-input"
        type="text"
        name="location-finder"
        id="location"  
        placeholder="select move in date"
      />
    </div>
    <div className="filters">
    <span>Price</span>
    <select name="" id="">
      <option value="10k-20k">10k-20k</option>
      <option value="20k-30k">20k-30k</option>
      <option value="30k-40k">30k-40k</option>
      <option value="40k-50k">40k-50k</option>
    </select>
    </div>
    <div className="filters">
    <span>Property Type</span>
    <select name="" id="">
      <option value="Flat">Flat</option>
      <option value="Bunglow">Bunglow</option>
      <option value="Villa">Villa</option>
    </select>
    </div>
    <button className="btn signup-btn">Search</button>
  </section>
  )
}
