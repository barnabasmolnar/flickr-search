import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Search from './Search';
import SearchResults from './SearchResults';

const API_KEY = "API_KEY";
const API_EXTRA = "date_upload,date_taken,owner_name,views,url_z";
const IMG_PER_PAGE = 9;

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            searchTerm: "",
            isKeywordsOpen: false
        }
        this.getPhotos = this.getPhotos.bind(this);
        this.handleClearSearchterm = this.handleClearSearchterm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleGet = this.handleGet.bind(this);
        this.handleAddKeyword = this.handleAddKeyword.bind(this);
        this.handleCloseKeywords = this.handleCloseKeywords.bind(this);
        this.handleKeywordsToggle = this.handleKeywordsToggle.bind(this);
    }

    getPhotos(pageNum = 1) {
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${this.state.searchTerm}&extras=${API_EXTRA}&per_page=${IMG_PER_PAGE}&page=${pageNum}&format=json&nojsoncallback=1`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ images: data.photos.photo }));
    }
    
    handleClearSearchterm() {
        this.setState({
            searchTerm: ""
        });
    }

    handleSearch(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    handleGet(e) {
        e.preventDefault();
        this.getPhotos();
    }

    handleKeywordsToggle() {
        this.setState({
            isKeywordsOpen: !this.state.isKeywordsOpen
        });
    }

    handleCloseKeywords() {
        this.setState({
            isKeywordsOpen: false
        });
    }

    handleAddKeyword(val) {
        this.setState({
            searchTerm: val,
            isKeywordsOpen: false
        }, this.getPhotos);
    }

    render() {
        return (
            <div>
                <NavMenu />
                <Search 
                    handleGet={this.handleGet}
                    handleSearch={this.handleSearch}
                    handleClearSearchterm={this.handleClearSearchterm}
                    handleKeywordsToggle={this.handleKeywordsToggle}
                    handleAddKeyword={this.handleAddKeyword}
                    handleCloseKeywords={this.handleCloseKeywords}
                    isKeywordsOpen={this.state.isKeywordsOpen}
                    searchTerm={this.state.searchTerm}
                />
                <SearchResults images={this.state.images} handlePageChange={this.getPhotos} />
            </div>
        );
    }
}