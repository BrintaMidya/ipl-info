import React from "react";

class OwnerCard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="image">
					<img src={this.props.img} alt="" />
				</div>
				<div className="content">
					<div className="header">{this.props.name}</div>
					<div className="description">{this.props.country}</div>
				</div>
				<div className="content">
					<span>Owner of : </span>
					<span className="right floated">{this.props.team}</span>
				</div>
				<div className="content">
					<span>Trophy Won : </span>
					<span className="right floated">{this.props.wins}</span>
				</div>
			</div>
		);
	}
}

export default OwnerCard;
