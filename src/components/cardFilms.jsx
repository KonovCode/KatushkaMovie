

export default function CardFilms(props) {

    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: img,
    } = props;
    
    return(
        <div class="card movie" id={id}>
    <div class="card-image waves-effect waves-block waves-light">
        {img === 'N/A' ? <img class="activator" src={`https://via.placeholder.com/250x400.png?text=${title}/`}/> :  <img class="activator" src={img}/>}
      
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{title}</span>
      
      <p>{year}</p>
      <p className="right">{type}</p>
    </div>
    
  </div>
    )
}