import { useEffect, useRef } from "react";
import data from "../../../../data.json"
import { IFilms } from "../../Interface"
import "./Films.scss"

export default function Films() {
  const films: IFilms[] = data.TendingNow
  const sortedFilms = [...films].sort((a,b) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime();
  }) 
  
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: React.WheelEvent | Event) => {
        if ("deltaY" in e && e.deltaY !== 0) {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + (e as React.WheelEvent).deltaY * 3,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  const handleCHange = (film:IFilms) => {
    window.open(film.VideoUrl, '_blank');
  }

  return (
    <div className="Films">
      <p className="Films-title">Trending Now</p>
      <div className="Films-items" ref={elRef}>
        {
          sortedFilms.map(film => {
            return(
              <img src={film.CoverImage} alt={film.Title} key = {film.Id} onClick={() => handleCHange(film)}/>
            )
          })
        }
      </div>
    </div>
  )
}