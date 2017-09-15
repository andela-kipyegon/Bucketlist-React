import React from 'react';

const Header = ()=> {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded">
            <a className="navbar-brand" href="#">Bucket</a>
            <form className="form-inline ml-auto settings">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">@</span>
                    <input type="text" className="form-control search" placeholder="Search Bucket" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group paginate-records">
                    <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                        <option>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </form>
        </nav>
    );
};

export default Header;