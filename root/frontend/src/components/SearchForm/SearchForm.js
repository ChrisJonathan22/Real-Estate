import React, { Fragment, useState, useEffect } from 'react';
import './SearchForm.scss';
// import { getAllProperties } from '../../tools/functions';
// import { ALLPROPENDPOINT } from '../../tools/API';

export default function SearchForm (props)  {
    const page = props.page;
    const type = "sales";
    
    const [ minPrice, setMinPrice ] = useState([ { minPrice: "Min Price" }, { 350000: "£350k" }, { 500000: "£500k" }, { 750000: "£750k" }, { 1000000: "£1M" }, { 2500000: "£2.5M" }, { 5000000: "£5M" }, { 7500000: "£7.5M" }, { 10000000: "£10M" }, { 12500000: "£12.5M" }, { 15000000: "£15M" } ]);
    const [ maxPrice, setMaxPrice ] = useState(["Max Price", { 500000: "£500k" }, { 750000: "£750k" }, { 1000000: "£1M" }, { 2500000: "£2.5M" }, { 5000000: "£5M" }, { 7500000: "£7.5M" }, { 10000000: "£10M" }, { 12500000: "£12.5M" }, { 15000000: "£15M" } ]);
    const [ minBed, setMinBed ] = useState(["No Min", 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    const [ maxBed, setMaxBed ] = useState(["No Max", 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
    const [ areas, setArea ] = useState([ "All",  "Aldenham", "Barnet", "East Finchley", "Hendon", "Whetstone"]);
    const [ propertyType, setPropertyType ] = useState([ "All", "Bungalow", "Flat", "House", "Maisonette", "New Homes", "Land" ]);
    const [ sortBy, setSortBy ] = useState([ "Most Recent", "Price (Highest)", "Price (Lowest)" ]);

    console.log(minPrice);
    

    // componentDidMount () {
    //     getAllProperties(ALLPROPENDPOINT);
    // }

        return (
            <Fragment>
                <div className="search_form_container">
                    <h3 className="search_form_title">Find your new home</h3>
                    <div className="search_bar">
                        <div className="radio_control">
                            <input type="radio" name="listings" id="radio_buy" value="buy" checked />
                            <label htmlFor="radio_buy">Sales</label>
                        </div>
                        <div className="radio_control">
                            <input type="radio" name="listings" id="radio_rent" value="rent" />
                            <label htmlFor="radio_rent">Lettings</label>
                        </div>
                        {/* <input name="s" type="text" placeholder="Search..." className="search_special" /> */}
                        <input type="submit" value="Search" />
                    </div>
                    <div className="search_options">
                        <div className="option_control dual_option">
                            <label htmlFor="min-price">Price range (&pound;)</label>
                            <div className="SumoSelect sumo_min_price" tabIndex="0" role="button" aria-expanded="false">
                                { page === "Home" &&  type === "sales"? 
                                    <select className="select_sm SumoUnder" id="min_price" tabIndex="1">
                                    {
                                        minPrice.map((price) => {
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
                                    
                                    :
                                    // <select className="select_sm SumoUnder" id="min_price" tabindex="1" onChange={this.getSearchInfo}>
                                    //     <option className="rprice" value="0" defaultValue>Min PCM</option>
                                    //     <option className="rprice" value="500">£500</option>
                                    //     <option className="rprice" value="1000">£1k</option>
                                    //     <option className="rprice" value="2000">£2k</option>
                                    //     <option className="rprice" value="3000">£3k</option>
                                    //     <option className="rprice" value="4000">£4k</option>
                                    //     <option className="rprice" value="5000">£5k</option>
                                    //     <option className="rprice" value="7500">£7.5k</option>
                                    //     <option className="rprice" value="10000">£10k</option>
                                    //     <option className="rprice" value="12500">£12.5k</option>
                                    // </select>
                                    <p></p>
                                }
                                
                            </div>
                            {/* <div className="SumoSelect sumo_max-price" tabindex="0" role="button" aria-expanded="true">
                                { type === "sales" ?
                                    <select className="select-sm SumoUnder" id="max_price" name="max-price" tabindex="-1" onChange={this.getSearchInfo}>
                                        <option className="bprice" value="0" defaultValue>Max Price</option>
                                        <option className="bprice" value="500000">£500k</option>
                                        <option className="bprice" value="750000">£750k</option>
                                        <option className="bprice" value="1000000">£1M</option>
                                        <option className="bprice" value="2500000">£2.5M</option>
                                        <option className="bprice" value="5000000">£5M</option>
                                        <option className="bprice" value="7500000">£7.5M</option>
                                        <option className="bprice" value="10000000">£10M</option>
                                        <option className="bprice" value="12500000">£12.5M</option>
                                        <option className="bprice" value="15000000">£15M</option>
                                        <option className="bprice" value="20000000">£20M</option>    
                                    </select>
                                :    
                                    <select className="select-sm SumoUnder" id="max_price" name="max-price" tabindex="-1" onChange={this.getSearchInfo}>
                                        <option className="rprice" value="0" defaultValue>Max PCM</option>
                                        <option className="rprice" value="1000">£1k</option>
                                        <option className="rprice" value="2000">£2k</option>
                                        <option className="rprice" value="3000">£3k</option>
                                        <option className="rprice" value="4000">£4k</option>
                                        <option className="rprice" value="5000">£5k</option>
                                        <option className="rprice" value="7500">£7.5k</option>
                                        <option className="rprice" value="10000">£10k</option>
                                        <option className="rprice" value="12500">£12.5k</option>
                                        <option className="rprice" value="15000">£15k</option>      
                                    </select>
                                }    
                            </div> */}
                        </div>

                        {/* <div className="option_control dual_option">
                            <label htmlFor="min-price">Bedrooms</label>
                            <div className="SumoSelect sumo_min_price" tabIndex="0" role="button" aria-expanded="false">
                                <select className="select_sm SumoUnder" id="min_bed" tabindex="1" onChange={this.getSearchInfo}>
                                    <option className="bprice" value="0" defaultValue>No Min</option>
                                    <option className="bprice" value="1">1</option>
                                    <option className="bprice" value="2">2</option>
                                    <option className="bprice" value="3">3</option>
                                    <option className="bprice" value="4">4</option>
                                    <option className="bprice" value="5">5</option>
                                    <option className="bprice" value="6">6</option>
                                    <option className="bprice" value="7">7</option>
                                    <option className="bprice" value="8">8</option>
                                    <option className="bprice" value="9">9</option>
                                </select>
                            </div>
                            <div className="SumoSelect sumo_max-price" tabindex="0" role="button" aria-expanded="true">
                                <select className="select_sm SumoUnder" id="max_bed" tabindex="1" onChange={this.getSearchInfo}>
                                    <option className="rprice" value="0" defaultValue>No Max</option>
                                    <option className="rprice" value="2">2</option>
                                    <option className="rprice" value="3">3</option>
                                    <option className="rprice" value="4">4</option>
                                    <option className="rprice" value="5">5</option>
                                    <option className="rprice" value="6">6</option>
                                    <option className="rprice" value="7">7</option>
                                    <option className="rprice" value="8">8</option>
                                    <option className="rprice" value="9">9</option>
                                    <option className="rprice" value="10">10</option>
                                </select>
                            </div>
                            </div> */}


                            {/* <div className="option_control areas">
                                <label htmlFor="areas">Areas</label>
                                <div className="SumoSelect sumo_areas" tabindex="0" role="button" aria-expanded="true">
                                    <select className="select-lg SumoUnder" id="areas" name="areas" tabindex="-1" onChange={this.getSearchInfo}>
                                        <option value="" defaultValue>All</option>
                                        <option value="aldenham">Aldenham</option>
                                        <option value="arkley">Arkley</option>
                                        <option value="barnet">Barnet</option>
                                        <option value="borehamwood">Borehamwood</option>
                                        <option value="east-finchley">East Finchley</option>
                                        <option value="elstree">Elstree</option>
                                        <option value="finchley">Finchley</option>
                                        <option value="hadley-green">Hadley Green</option>
                                        <option value="hadley-wood">Hadley Wood</option>
                                        <option value="hendon">Hendon</option>
                                        <option value="mill-hill">Mill Hill</option>
                                        <option value="north-finchley">North Finchley</option>
                                        <option value="oakleigh-park">Oakleigh Park</option>
                                        <option value="other">Other</option>
                                        <option value="radlett">Radlett</option>
                                        <option value="totteridge">Totteridge</option>
                                        <option value="west-finchley">West Finchley</option>
                                        <option value="whetstone">Whetstone</option>
                                        <option value="woodside-park">Woodside Park</option>
                                    </select>
                                </div>
                            </div> */}

                            {/* <div className="option_control property_type">
                                <label htmlFor="property_types">Property</label>
                                <div className="SumoSelect sumo_property_types" tabindex="0" role="button" aria-expanded="true">
                                    <select className="select-lg SumoUnder" id="property_types" name="property_types" tabindex="-1" onChange={this.getSearchInfo}>
                                        <option value="" defaultValue>All</option>
                                        <option className="property_types-option rent-only" value="bungalow">Bungalow</option>
                                        <option className="property_types-option rent-only" value="flat">Flat</option>
                                        <option className="property_types-option rent-only" value="house">House</option>
                                        <option className="property_types-option " value="maisonette">Maisonette</option>
                                        <option className="property_types-option " value="new-homes">New Homes</option>
                                        <option className="property_types-option " value="plot">Plot</option>
                                    </select>
                                </div>
                            </div> */}

                            {/* <div className="option_control dual_option sortby">
                                <label htmlFor="min-price">Sort by</label>
                                <div className="SumoSelect sumo_sort_by" tabindex="0" role="button" aria-expanded="false">
                                    <select className="select-sm SumoUnder" id="sort_by" name="sort_by" tabindex="-1" onChange={this.getSearchInfo}>
                                        <option value="mostRecent">Most recent</option>
                                        <option value="price-desc">Price (highest)</option>
                                        <option value="price-asc" defaultValue>Price (lowest)</option>
                                    </select>
                                </div>
                            </div> */}

                    </div>
                </div>
            </Fragment>
        )
}
