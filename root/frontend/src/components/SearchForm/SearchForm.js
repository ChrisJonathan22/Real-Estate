import React, { Component, Fragment } from 'react';
import './SearchForm.scss';

export default class SearchForm extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render() {
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
                                
                            </div>
                        </div>
                        <div className="option_control dual_option"></div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
