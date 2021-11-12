import React from "react"
import { connect } from "react-redux"
export class Results extends React.Component {
    render(){
        return(
            <div>
                {(this.props.state.restaurants)?(
                    <div>
                        {this.props.state.restaurants.map((restaurant) => {
                            return (
                                <div>
                                    <h3>{restaurant.name}</h3>
                                    <ul>
                                        <li>rating: {restaurant.rating}</li>
                                        <li>distance: {restaurant.distance}</li>
                                        <li>price: {restaurant.price}</li>
                                    </ul>
                                </div>
                            )

                        })}

                    </div>
                ):(<div></div>)}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
      state
    }
  }
  export default connect(mapState)(Results)

