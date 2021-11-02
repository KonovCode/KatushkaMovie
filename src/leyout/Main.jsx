import React, { Component } from 'react';
import Films from '../components/films';
import Preloader from '../components/preloader';
import Search from '../components/search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

    state = {
        films: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=venom`)
            .then((data) => {
                if(data.ok && data.status === 200) {
                    return data.json();
                } throw new data('error')
            })
            .then(data => this.setState({films: data.Search, loading: false}))
    }

    getSearch = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(data => data.json())
            .then(data => this.setState({films: data.Search, loading: false}))
    }

    render() {

        const {films, loading} = this.state;

        return(
            <div className="MainBox">
                <Search search={this.getSearch}/>
                {
                    loading ? <Preloader/> : <Films films={this.state.films}/>
                }
                
            </div> 
        )
    }
}

export {Main}