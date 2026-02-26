import "./RandomCoffee.css";
export default function RandomCoffee({coffee}){
    return (
        <div className="random-coffee">
            <div className="coffee-info">
                <h4 className="coffee-title">Кава дня</h4>
                <h3 className="coffee-name">{coffee.name}</h3>
                <p className="coffee-description">{coffee.description}</p>
                <p className="coffee-price">{coffee.price} грн</p>
                <button className="coffee-button">Детальніше</button>
            </div>
        </div>
    )
}
