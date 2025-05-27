import data  from '../data';

const travelLists = data.map(({id, img, title, country, googleMapsLink, dates, text}) => {
    return <article key={id} className="travel-card">
                <div className="travel-img-container">
                    <img src={img.src} alt={img.alt} />
                </div>
                <div className="travel-content">
               <div className="travel-content-header">
                    <img src="../../../../public/map.png" alt="location logo" />
                    <span>{country}</span>
                    <a href={googleMapsLink} target="_blank">View on Google Maps</a>
                </div> 
                <h1 className="travel-title">
                    {title}
                </h1>
                <p className="travel-date">
                    {dates}
                </p>
                <p className="travel-description">
                   {text}
                </p>
            </div>
            </article>
})

export default function Entry(){
    return (
        <main className="flex flex-col gap-y-5">
            { travelLists}
        </main>
    )
} 
 