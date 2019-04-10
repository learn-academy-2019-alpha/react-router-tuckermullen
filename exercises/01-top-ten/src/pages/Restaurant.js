import React, { Component } from 'react';

import restaurants from '../store/restaurants'

class Restaurant extends Component {
	constructor(props) {
		super(props)
		const { match } = props

		this.state = {
			restaurantId: match.params.id
		}
	}

	componentDidUpdate(prevProps) {
		const prevMatch = prevProps.match
		const { match } = this.props
		if(match.params.id != prevMatch.params.id) {
			this.setState({ restaurantId: match.params.id})
		}
	}

	render() {
		const { restaurantId } = this.state
		const restaurant = restaurants.find((r) => r.id == restaurantId)

		return (
			<div>
				{restaurant &&
					<div>
						<h1>{restaurant.name}</h1>
						<p><strong>Details:</strong> {restaurant.detail}</p>
						<p><strong>Location:</strong> {restaurant.location}</p>
						<p><strong>Most Popular Item:</strong> {restaurant.popular_item}</p>
					</div>
				}
			</div>
			)
	}
}

export default Restaurant;