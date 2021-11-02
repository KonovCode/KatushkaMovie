import React, {Component} from "react";

class Search extends Component {

    state = {
        search: '',
        type: 'all',
    }

    handelFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => 
        {this.props.search(this.state.search, this.state.type)})
    }

    render() {

      return(
            <div className="row searchBox">
            <div className="col s12">
          
          <div className="input-field">
            <input type="search" 
            className="validate" 
            placeholder="Search"
            value={this.state.search}
            onChange={(event) => {this.setState({search: event.target.value})}}
            />
            <div className="btn search-btn" onClick={() => this.props.search(this.state.search, this.state.type)}>
            search
        </div>
            </div>
        </div>
        <p>
        <label>
          <input className="with-gap" 
          name="type" 
          type="radio" 
          data-type="all" 
          onClick={this.handelFilter}
          checked={this.state.type === 'all'}
          />
          <span>All</span>
      </label>
      <label>
          <input className="with-gap" 
          name="type" type="radio" 
          data-type="movie" 
          onClick={this.handelFilter}
          checked={this.state.type === 'movie'}
          />
          <span>Movie</span>
      </label>
      <label>
          <input className="with-gap" 
          name="type" 
          type="radio" 
          data-type="series" 
          onClick={this.handelFilter}
          checked={this.state.type === 'series'}
          />
          <span>Series</span>
      </label>
  </p>
      </div>
        )
    }
}

export default Search

