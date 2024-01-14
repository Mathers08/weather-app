import { FC } from 'react';
import './CityList.scss';
import { clear } from "../../assets";

interface CityListProps {

}

const CityList: FC<CityListProps> = () => {
  return (
    <div className="city-list">
      <div className="city-list-item">
        <div className="city-list-item-main">
          <img src={clear} alt="clear" />
          <div className="city-list-item-main__info">
            <h2 className="city-list-item-main__info-name">Madrid</h2>
            <p className="city-list-item-main__info-time">10:22</p>
          </div>
        </div>
        <div className="city-list-item__temp">20°C</div>
      </div>
      <div className="city-list-item">
        <div className="city-list-item-main">
          <img src={clear} alt="clear" />
          <div className="city-list-item-main__info">
            <h2 className="city-list-item-main__info-name">Madrid</h2>
            <p className="city-list-item-main__info-time">10:22</p>
          </div>
        </div>
        <div className="city-list-item__temp">20°C</div>
      </div>
      <div className="city-list-item">
        <div className="city-list-item-main">
          <img src={clear} alt="clear" />
          <div className="city-list-item-main__info">
            <h2 className="city-list-item-main__info-name">Madrid</h2>
            <p className="city-list-item-main__info-time">10:22</p>
          </div>
        </div>
        <div className="city-list-item__temp">20°C</div>
      </div>
      <div className="city-list-item">
        <div className="city-list-item-main">
          <img src={clear} alt="clear" />
          <div className="city-list-item-main__info">
            <h2 className="city-list-item-main__info-name">Madrid</h2>
            <p className="city-list-item-main__info-time">10:22</p>
          </div>
        </div>
        <div className="city-list-item__temp">20°C</div>
      </div>
      <div className="city-list-item">
        <div className="city-list-item-main">
          <img src={clear} alt="clear" />
          <div className="city-list-item-main__info">
            <h2 className="city-list-item-main__info-name">Madrid</h2>
            <p className="city-list-item-main__info-time">10:22</p>
          </div>
        </div>
        <div className="city-list-item__temp">20°C</div>
      </div>
    </div>
  );
};
//°C
export default CityList;