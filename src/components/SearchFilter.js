import React, { useState, useEffect } from 'react';

import './stylesheets/SearchFilter.scss';

import Dropdown from './Dropdown';

const SearchFilter = ({array, Component, renderClassName = 'content'}) => {

  // // The current filter
  // const [filter, setFilter] = useState({
  //   minPrice: 0,                              // Minimum price
  //   maxPrice: 0,                              // Maximum price
  //   minRating: 0,                             // Minimum rating to filter by
  //   matches: ''                               // The search term to filter by
  // })

  // All the options available to sort results by
  const sortByOptions = ['rating', 'name', 'date', 'price'];

  // Current sort by setting
  const [sortBy, setSortBy] = useState();

  const onSortByUpdated = () => {
    if(!sortBy && localStorage.getItem('sortby')) {
      setSortBy(localStorage.getItem('sortby'));
    } else {
      if(!sortBy) setSortBy(sortByOptions[0])
      localStorage.setItem('sortby', sortBy);
    }
  }

  useEffect(onSortByUpdated, [sortBy])

  const onChangeSortBy = option => {
    setSortBy(option);
  }

  return (
    <div className='search-filter'>
      <div className='filter'>
        <div className='left'>
          
        </div>
        <div className='right'>
          <label>
            SORT BY
          </label>
          <Dropdown allcaps onChange={onChangeSortBy} value={sortBy} options={sortByOptions} />
        </div>
      </div>
      <div className={renderClassName}>
        {array ? array.map(el => Component !== undefined ? <Component key={el.id} data={el} /> : console.error('Search filter not provided with a component')) : console.error('Search filter not provided with an array to search through')}
      </div>
    </div>
  );
};

export default SearchFilter;