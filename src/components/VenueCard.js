import React from "react";

class VenueCard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="image">
					<img src={this.props.img} alt="" />
				</div>
				<div className="content">
					<div className="header">{this.props.name}</div>
					<div className="description">{this.props.city}</div>
				</div>
				<div className="content">
					<span>Matches Played : </span>
					<span className="right floated">{this.props.matches}</span>
				</div>
				<div className="content">
					<span>HomeGround of : </span>
					<span className="right floated">{this.props.team}</span>
				</div>
			</div>
		);
	}
}

export default VenueCard;
