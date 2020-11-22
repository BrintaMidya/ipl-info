import React from "react";

class TeamCard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="image">
					<img src={this.props.img} alt="" />
				</div>
				<div className="content">
					<div className="header">{this.props.name}</div>
					<div className="description">{this.props.state}</div>
				</div>
				<div className="content">
					<span>Trophy Won : </span>
					<span className="right floated">{this.props.wins}</span>
				</div>
				<div className="content">
					<span>Home Ground : </span>
					<span className="right floated">{this.props.homeGround}</span>
				</div>
			</div>
		);
	}
}

export default TeamCard;
