import data from "../../../data.json"
import { BsFillPlayFill } from 'react-icons/bs'
import "./Home.scss"
import Films from "./Films/Films"
import { ICover } from "../Interface"

export default function Home() {
  const datas: ICover = data.Featured
 
  return (
    <div className="Home">
      <div className="Home-main">
        <div className="Home-main-info">
          <h4 className="Home-main-info-category">{datas.Category}</h4>
          <img src={datas.TitleImage} alt={datas.Title} />
          <p>
            {datas.ReleaseYear} {datas.MpaRating} 1h 48m
          </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className="button">
            <button><BsFillPlayFill /> Play</button>
            <button className="button-blue">More Info</button>
          </div>
        </div>
        <Films />
      </div>
    </div>
  )
}
