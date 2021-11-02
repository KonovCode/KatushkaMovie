import CardFilms from "./cardFilms";


export default function Films(props) {

    const {films= []} = props;
    
    return(
        <div className="container">
            {
               films.length ? films.map(movie => {
                   return <CardFilms key={movie.imdbID} {...movie}/>
                }) : <h4 className='nothing'>Nothing found</h4>
            }
        </div>
    )
}