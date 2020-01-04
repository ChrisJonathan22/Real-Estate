import React, { Component, Fragment } from 'react';
import './SearchForm.scss';

export default class SearchForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: "sales",
            minPrice: '',
            maxPrice: '',
            minBed: '',
            maxBed: '' 
        }
    }
    render() {
        let { type } = this.state;
        return (
            <Fragment>
                <div className="search_form_container">
                    <h3 className="search_form_title">Find your new home</h3>
                    <div className="search_bar">
                        <div className="radio_control">
                            <input type="radio" name="listings" id="radio_buy" value="buy" checked />
                            <label for="radio_buy">Sales</label>
                        </div>
                        <div className="radio_control">
                            <input type="radio" name="listings" id="radio_rent" value="rent" />
                            <label for="radio_rent">Lettings</label>
                        </div>
                        <input name="s" type="text" placeholder="Search..." className="search_special" />
                        <input type="submit" value="Search" />
                    </div>
                    <div className="search_options">
                        <div className="option_control dual_option">
                            <label for="min-price">Price range (&pound;)</label>
                            <div className="SumoSelect sumo_min_price" tabIndex="0" role="button" aria-expanded="false">
                                {type === "sales" ? 
                                    <select className="select_sm SumoUnder" id="min_price" tabindex="1">
                                        <option className="bprice" value="0" selected="">Min Price</option>
                                        <option className="bprice" value="350000">£350k</option>
                                        <option className="bprice" value="500000">£500k</option>
                                        <option className="bprice" value="750000">£750k</option>
                                        <option className="bprice" value="1000000">£1M</option>
                                        <option className="bprice" value="2500000">£2.5M</option>
                                        <option className="bprice" value="5000000">£5M</option>
                                        <option className="bprice" value="7500000">£7.5M</option>
                                        <option className="bprice" value="10000000">£10M</option>
                                        <option className="bprice" value="12500000">£12.5M</option>
                                        <option className="bprice" value="15000000">£15M</option>
                                    </select>
                                :
                                    <select className="select_sm SumoUnder" id="min_price" tabindex="1">
                                        <option className="rprice" value="0" selected="">Min PCM</option>
                                        <option className="rprice" value="500">£500</option>
                                        <option className="rprice" value="1000">£1k</option>
                                        <option className="rprice" value="2000">£2k</option>
                                        <option className="rprice" value="3000">£3k</option>
                                        <option className="rprice" value="4000">£4k</option>
                                        <option className="rprice" value="5000">£5k</option>
                                        <option className="rprice" value="7500">£7.5k</option>
                                        <option className="rprice" value="10000">£10k</option>
                                        <option className="rprice" value="12500">£12.5k</option>
                                    </select>
                                }
                            </div>
                            <div class="SumoSelect sumo_max-price" tabindex="0" role="button" aria-expanded="true">
                                { type === "sales" ?
                                    <select class="select-sm SumoUnder" id="max-price" name="max-price" tabindex="-1">
                                        <option class="bprice" value="999999999" selected="">Max Price</option>
                                        <option class="bprice" value="500000">£500k</option>
                                        <option class="bprice" value="750000">£750k</option>
                                        <option class="bprice" value="1000000">£1M</option>
                                        <option class="bprice" value="2500000">£2.5M</option>
                                        <option class="bprice" value="5000000">£5M</option>
                                        <option class="bprice" value="7500000">£7.5M</option>
                                        <option class="bprice" value="10000000">£10M</option>
                                        <option class="bprice" value="12500000">£12.5M</option>
                                        <option class="bprice" value="15000000">£15M</option>
                                        <option class="bprice" value="20000000">£20M</option>    
                                    </select>
                                :    
                                    <select class="select-sm SumoUnder" id="max-price" name="max-price" tabindex="-1">
                                        <option class="rprice" value="999999999" selected="">Max PCM</option>
                                        <option class="rprice" value="1000">£1k</option>
                                        <option class="rprice" value="2000">£2k</option>
                                        <option class="rprice" value="3000">£3k</option>
                                        <option class="rprice" value="4000">£4k</option>
                                        <option class="rprice" value="5000">£5k</option>
                                        <option class="rprice" value="7500">£7.5k</option>
                                        <option class="rprice" value="10000">£10k</option>
                                        <option class="rprice" value="12500">£12.5k</option>
                                        <option class="rprice" value="15000">£15k</option>      
                                    </select>
                                }    
                            </div>
                        </div>

                        <div className="option_control dual_option">
                            <label for="min-price">Bedrooms</label>
                            <div className="SumoSelect sumo_min_price" tabIndex="0" role="button" aria-expanded="false">
                                <select className="select_sm SumoUnder" id="min_price" tabindex="1">
                                    <option className="bprice" value="0" selected="">No Min</option>
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
                            <div class="SumoSelect sumo_max-price" tabindex="0" role="button" aria-expanded="true">
                                <select className="select_sm SumoUnder" id="min_price" tabindex="1">
                                    <option className="rprice" value="0" selected="">No Max</option>
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
                            </div>


                            <div class="option_control areas">
                                <label for="areas">Areas</label>
                                <div class="SumoSelect sumo_areas" tabindex="0" role="button" aria-expanded="true">
                                    <select class="select-lg SumoUnder" id="areas" name="areas" tabindex="-1">
                                        <option value="" selected="">All</option>
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
                            </div>
                        <div className="option_control dual_option"></div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
