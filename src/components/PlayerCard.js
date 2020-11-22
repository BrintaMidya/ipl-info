import React from "react";

class PlayerCard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="image">
					<img src={this.props.img} alt="" />
				</div>
				<div className="content">
					<div className="header">{this.props.name}</div>
					<div className="description">{this.props.description}</div>
				</div>
				<div className="content">
					<span>Team : </span>
					<span className="right floated">{this.props.team}</span>
				</div>
				<div className="content">
					<span>Country : </span>
					<span className="right floated">{this.props.country}</span>
				</div>
			</div>
		);
	}
}

export default PlayerCard;
