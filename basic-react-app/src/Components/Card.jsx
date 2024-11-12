import './Card.css';

function Card() {
    return (
        <div>
            <hr />
            <div className="main div">
                <div>
                    <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"></img>
                </div>
                <div className="description"><h4>Description</h4></div>
                <div><p>Lorem Epsum is a aefault keyword yrr...</p></div>
            </div>
        </div>

    )
}
export default Card;