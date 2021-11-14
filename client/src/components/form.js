import React from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../store/redux'

class RequestForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            numberOfResults: 5,
            name:'',
            customer_rating: '',
            distance: '',
            price: '',
            cuisine: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }    
    handleSubmit = async(event)=>{
        event.preventDefault()
        const specs = await {
            name: this.state.name,
            customer_rating: this.state.customer_rating,
            distance: this.state.distance,
            price: this.state.price,
            cuisine: this.state.cuisine
        }
        await this.props.fetchRestaurants(specs, this.state.numberOfResults)
        this.setState({
            specs: {
                name:'',
                customer_rating: '',
                distance: '',
                price: '',
                cuisine: ''
            }
        })
    }
    render(){
        let {name, customer_rating, price, cuisine} = this.state
        return(
            <div>
                <h1>What would you like to eat?</h1>
                <form onSubmit={this.handleSubmit} >
                    <lable htmlFor="restaurantName">Restaurant Name</lable>
                    <input name="name" onChange={this.handleChange} value={name} />
                    <lable htmlFor="customerRating">Customer Rating</lable>
                    <input name="customer_rating" onChange={this.handleChange} value={customer_rating}/>
                    <lable htmlFor="pirce">Average Price</lable>
                    <input name="price" onChange={this.handleChange} value={price} />
                    <lable htmlFor="cuisine">Cuisine Type</lable>
                    <input name="cuisine" onChange={this.handleChange} value={cuisine} />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }

}


const mapState = (state) => {
    return {
      state
    }
  }
const mapDispatch = (dispatch) => {
    return{
        fetchRestaurants: (specs, number) => dispatch(fetchRestaurants(specs, number))
    }

}
export default connect(mapState, mapDispatch)(RequestForm)

