import React, { Fragment, useState, useEffect } from 'react';
import './SearchForm.scss';
import { Link } from 'react-router-dom';
import * as utility from '../../tools/functions';
import { ADD_FILTERS } from '../../actions/types';
import store from '../../store';

export default function SearchForm (props)  {
    const page = props.page;
    const [ type, setType ] = useState("let");
    
    const [ minPrice, setMinPrice ] = useState([ { minPrice: "Min Price" }, { 350000: "£350k" }, { 500000: "£500k" }, { 750000: "£750k" }, { 1000000: "£1M" }, { 2500000: "£2.5M" }, { 5000000: "£5M" }, { 7500000: "£7.5M" }, { 10000000: "£10M" }, { 12500000: "£12.5M" }, { 15000000: "£15M" } ]);
    const [ maxPrice, setMaxPrice ] = useState([{ maxPrice: "Max Price" }, { 500000: "£500k" }, { 750000: "£750k" }, { 1000000: "£1M" }, { 2500000: "£2.5M" }, { 5000000: "£5M" }, { 7500000: "£7.5M" }, { 10000000: "£10M" }, { 12500000: "£12.5M" }, { 15000000: "£15M" } ]);
    const [ minPriceLettings, setMinPriceLettings ] = useState([ { minPrice: "Min Price" }, { 500: "£500" }, { 1000: "£1k" }, { 2000: "£2k" }, { 3000: "£3k" }, { 4000: "£4k" }, { 5000: "£5k" }, { 7500: "£7.5k" }, { 10000: "£10k" }, { 12500: "£12.5k" } ]);
    const [ maxPriceLettings, setMaxPriceLettings ] = useState([ { maxPrice: "Max Price" }, { 1000: "£1k" }, { 2000: "£2k" }, { 3000: "£3k" }, { 4000: "£4k" }, { 5000: "£5k" }, { 7500: "£7.5k" }, { 10000: "£10k" }, { 12500: "£12.5k" }, { 15000: "£15k" } ]);

    const [ minBed, setMinBed ] = useState(["No Min", 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    const [ maxBed, setMaxBed ] = useState(["No Max", 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
    const [ areas, setArea ] = useState([ "All",  "Aldenham", "Barnet", "East Finchley", "Hendon", "Whetstone"]);
    const [ propertyTypes, setPropertyType ] = useState([ "All", "Bungalow", "Flat", "House", "Maisonette", "New Homes", "Land" ]);
    const [ sortBy, setSortBy ] = useState([ "Most Recent", "Price (Highest)", "Price (Lowest)" ]);

    const [ filter, setFilter ] = useState({});
    
    // console.log(filter);
    // console.log(store.getState());
    

        return (
            <Fragment>
                <div className="search_form_container">
                    <h3 className="search_form_title">Find your new home</h3>
                    <div className="search_bar">
                        <div className="radio_control">
                            <input type="radio" name="listings" id="radio_buy" value="buy" />
                            <label htmlFor="radio_buy" onClick={(e) => utility.handleType("let", filter, setType, setFilter)}>Sales</label>
                        </div>
                        <div className="radio_control">
                            <input type="radio" name="listings" id="radio_rent" value="rent" />
                            <label htmlFor="radio_rent" onClick={(e) => utility.handleType("rent", filter, setType, setFilter)}>Lettings</label>
                        </div>
                        <input name="search" type="text" placeholder="Search area..." className="search_special" onKeyUp={(e) => utility.handleSearch(e.target, filter, setFilter)} />
                        { type === "let" ?
                            <Link  exact="true" to="/sales"><input type="submit" value="Search" className="search_btn" onClick={ () => store.dispatch({type: ADD_FILTERS, filter: filter }) } /></Link>
                            :
                            <Link  exact="true" to="/lettings"><input type="submit" value="Search" className="search_btn" onClick={ () => store.dispatch({type: ADD_FILTERS, filter: filter }) } /></Link>
                        }
                    </div>
                    <div className="search_options">
                        <div className="option_control dual_option">
                            <label htmlFor="min-price">Price range (&pound;)</label>
                            <div className="SumoSelect sumo_min_price" tabIndex="0" role="button" aria-expanded="false">
                                { type === "let" ? 
                                    <select className="select_sm SumoUnder" id="min_price" tabIndex="1" name="minPrice" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                    {
                                        minPrice.map((price) => {
                                            let value = Object.values(price)[0];
                                            let key = Object.keys(price)[0];

                                            if (key === "Min Price") {
                                                return <option className="bprice" value="0" defaultValue>{ value }</option>
                                            } else {
                                                return (
                                                <option className="bprice" value={ key } key={ key }>{ value }</option>
                                                );
                                            }
                                        })
                                    }
                                    </select>
                                    :
                                    <select className="select_sm SumoUnder" id="min_price" tabIndex="1" name="minPrice" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                    {
                                        minPriceLettings.map((price) => {
                                            let value = Object.values(price)[0];
                                            let key = Object.keys(price)[0];

                                            if (key === "Min Price") {
                                                return <option className="bprice" value="0" defaultValue>{ value }</option>
                                            } else {
                                                return (
                                                <option className="bprice" value={ key }>{ value }</option>
                                                );
                                            }
                                        })
                                    }
                                    </select>
                                }
                            </div>
                            <div className="SumoSelect sumo_max-price" tabIndex="0" role="button" aria-expanded="true">
                                {
                                    type === "let" ?
                                    <select className="select-sm SumoUnder" id="max_price" name="maxPrice" tabIndex="-1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                    {
                                        maxPrice.map((price) => {
                                            let value = Object.values(price)[0];
                                            let key = Object.keys(price)[0];

                                            if (key === "Max Price") {
                                                return <option className="bprice" value="0" defaultValue>{ value }</option>
                                            } else {
                                                return (
                                                <option className="bprice" value={ key } key={ key }>{ value }</option>
                                                );
                                            }
                                        })
                                    }
                                    </select>
                                    :
                                    <select className="select-sm SumoUnder" id="max_price" name="maxPrice" tabIndex="-1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                    {
                                        maxPriceLettings.map((price) => {
                                            let value = Object.values(price)[0];
                                            let key = Object.keys(price)[0];

                                            if (key === "Max Price") {
                                                return <option className="bprice" value="0" defaultValue>{ value }</option>
                                            } else {
                                                return (
                                                <option className="bprice" value={ key } key={ key }>{ value }</option>
                                                );
                                            }
                                        })
                                    }
                                    </select>
                                }
                            </div>
                        </div>

                        <div className="option_control dual_option">
                            <label htmlFor="min-price">Bedrooms</label>
                            <div className="SumoSelect sumo_min_price" tabIndex="0" role="button" aria-expanded="false">
                                <select className="select_sm SumoUnder" id="min-bed" name="minBed" tabIndex="1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                    { 
                                        minBed.map((num) => {
                                        if (num === "No Min") return <option className="bprice" value="0" key="0" defaultValue>{ num }</option>;
                                        else {
                                        return <option className="bprice" value={ num } key={ num }>{ num }</option>
                                        }
                                        }) 
                                    }
                                </select>
                            </div>
                            <div className="SumoSelect sumo_max-price" tabIndex="0" role="button" aria-expanded="true">
                            <select className="select_sm SumoUnder" id="max-bed" name="maxBed" tabIndex="1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                    { 
                                        maxBed.map((num) => {
                                        if (num === "No Max") return <option className="bprice" value="0" key="0" defaultValue>{ num }</option>;
                                        else {
                                        return <option className="bprice" value={ num } key={ num }>{ num }</option>
                                        }
                                        }) 
                                    }
                                </select>
                            </div>
                            </div>


                            <div className="option_control areas">
                                <label htmlFor="areas">Areas</label>
                                <div className="SumoSelect sumo_areas" tabIndex="0" role="button" aria-expanded="true">
                                    <select className="select-lg SumoUnder" id="areas" name="areas" tabIndex="-1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                        {
                                            areas.map((area) => {
                                            if (area === "All") return <option value="" key="0" defaultValue>{ area }</option>
                                            else {
                                            return <option value={ area } key={ area }>{ area }</option>;
                                            }
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="option_control property_type">
                                <label htmlFor="property_types">Property</label>
                                <div className="SumoSelect sumo_property_types" tabIndex="0" role="button" aria-expanded="true">
                                    <select className="select-lg SumoUnder" id="property_types" name="propertyTypes" tabIndex="-1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                        {
                                            propertyTypes.map((type) => {
                                                if (type === "All") return <option value="" key="0" defaultValue>{ type }</option>
                                                else {
                                                return <option className="property_types-option rent-only" value={ type } key={ type }>{ type }</option>
                                                }
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            { type == "let" ?

                            <Fragment>
                                <div className="option_control checkbox show-for-sell">
                                    <label htmlFor="inc-offer">Include Under Offer</label>
                                    <div className="tickbox">
                                        <input type="checkbox" name="incOffer" value="true" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)} />
                                    </div>
                                </div>

                                <div className="option_control checkbox show-for-sell">
                                    <label htmlFor="inc-sold">Include Sold</label>
                                    <div className="tickbox">
                                        <input type="checkbox" name="incSold" value="true" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)} />
                                    </div>
                                </div>
                            </Fragment>
                            :

                            <div className="option_control show-furnished">
                                <label htmlFor="min-price">Furnished</label>
                                <div className="SumoSelect sumo_furnished" tabIndex="0" role="button" aria-expanded="false">
                                    <select className="select-sm SumoUnder" id="furnished" name="furnished" tabIndex="-1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                        <option value="all" selected="">All</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            }

                            <div className="option_control dual_option sortby">
                                <label htmlFor="min-price">Sort by</label>
                                <div className="SumoSelect sumo_sort_by" tabIndex="0" role="button" aria-expanded="false">
                                    <select className="select-sm SumoUnder" id="sort_by" name="sortBy" tabIndex="-1" onChange={(e) => utility.handleFilter(e.target, filter, setFilter)}>
                                        <option value="mostRecent">Most recent</option>
                                        <option value="price-desc">Price (highest)</option>
                                        <option value="price-asc" defaultValue>Price (lowest)</option>
                                    </select>
                                </div>
                            </div>

                    </div>
                </div>
            </Fragment>
        )
}
