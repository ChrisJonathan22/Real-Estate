import React, { Component, Fragment } from 'react';
import './SearchForm.scss';

export default class SearchForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: "sales"
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
                        <div className="option_control dual_option"></div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
