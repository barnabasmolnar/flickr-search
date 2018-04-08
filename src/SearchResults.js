import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
    const renderButton = page => (
        <button type="button" key={page} className="btn btn-secondary" onClick={() => props.handlePageChange(page)}>{page}</button>
    );
    const renderPageToggler = () => (
        props.images.length !== 0 ?
            <div className="container">
                <div className="pages text-center my-2">
                    <div className="btn-group" role="group">
                        {[1, 2, 3, 4, 5].map(page => renderButton(page))}
                    </div>
                </div>
            </div>
            : null

    );

    return (
        <section className="search-results">
            <div className="container">
                <div className="row my-4">
                    {renderPageToggler()}
                    {props.images.map(({ id, ownername, url_z, title, datetaken, views }) => {
                        const bgStyle = { backgroundImage: `url(${url_z})` };
                        return (
                            <div className="col-sm-12 col-md-6 col-lg-4" key={id}>
                                <div className="card my-3">
                                    <div className="card-img-bg" style={bgStyle}></div>
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">{title}</h5>
                                        <ul className="img-info">
                                            <li>
                                                <i className="fa fa-user"></i>
                                                <span>{ownername}</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-calendar-o"></i>
                                                <span>{datetaken}</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-eye"></i>
                                                <span>{views}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {renderPageToggler()}
                </div>
            </div>
        </section>
    )
}

export default SearchResults;