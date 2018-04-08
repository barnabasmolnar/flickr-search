import React from 'react';
import './Search.css';
import Sidemenu from './Sidemenu'

const Search = (props) => {
    return (
        <section className="search">
            <Sidemenu
                handleCloseKeywords={props.handleCloseKeywords}
                isKeywordsOpen={props.isKeywordsOpen}
                handleAddKeyword={props.handleAddKeyword}
            />

            <form onSubmit={props.handleGet}>
                <div className="container">
                    <div className="form-row">
                        <div className="col-12 text-center my-3">
                            <span className="h3">I want to see some...</span>
                        </div>
                        <div className="col-10 offset-1">
                            <div className="search-input-wrap">
                                <label className="magnifier" htmlFor="searc-field">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                    <span className="sr-only">Search icon</span>
                                </label>
                                <span className="clear-searchterm">
                                    <i className="fa fa-times" aria-hidden="true" onClick={props.handleClearSearchterm}></i>
                                    <span className="sr-only">Clear search input</span>
                                </span>
                                <input
                                    id="search-field"
                                    type="text"
                                    className="form-control"
                                    placeholder="kittens perhaps?"
                                    onChange={props.handleSearch}
                                    value={props.searchTerm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <button
                            type="button"
                            className="btn btn-outline-secondary keyword-btn my-4 mx-auto"
                            onClick={props.handleKeywordsToggle}
                        >
                            Out of ideas? Click here for some suggestions
                            </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Search;
