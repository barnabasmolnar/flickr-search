import React, { Component } from 'react';
import './Keywords.css';
import {SideMenu} from 'react-sidemenu';
import Keywords from './Keywords';

class Sidemenu extends Component {
    constructor(props) {
        super(props);

        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    handleClickOutside(e) {
        if (!this.self.contains(e.target) && e.target.className.indexOf("keyword-btn") === -1) {
            this.props.handleCloseKeywords();
        }
    }

    render() {
        return (
            <div
                className={this.props.isKeywordsOpen ? "keywords keywords-open" : "keywords"}
                ref={node => {this.self = node;}}
            >
                <SideMenu
                    items={Keywords}
                    reverse={false}
                    // onMenuItemClick={(value) => console.log(value)}
                    onMenuItemClick={(value) => this.props.handleAddKeyword(value)}
                />
            </div>
        )
    }
}

export default Sidemenu;