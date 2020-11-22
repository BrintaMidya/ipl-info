import React from "react";
import PlayerCard from "./PlayerCard";
import TeamCard from "./TeamCard";
import VenueCard from "./VenueCard";
import OwnerCard from "./OwnerCard";

const DisplayEvents = (props) => {
	const players = props.players.map((player) => (
		<PlayerCard
			key={player.name}
			img={player.imgUrl}
			name={player.name}
			description={player.description}
			team={player.team}
			country={player.country}
		/>
	));
	const teams = props.teams.map((team) => (
		<TeamCard
			key={team.name}
			img={team.imgUrl}
			name={team.name}
			state={team.state}
			wins={team.wins}
			homeground={team.homeground}
		/>
	));
	const venues = props.venues.map((venue) => (
		<VenueCard
			key={venue.name}
			img={venue.imgUrl}
			name={venue.name}
			city={venue.city}
			matches={venue.matches}
			team={venue.team}
		/>
	));
	const owners = props.owners.map((owner) => (
		<OwnerCard
			key={owner.name}
			img={owner.imgUrl}
			name={owner.name}
			country={owner.country}
			team={owner.team}
			wins={owner.wins}
		/>
	));
	return (
		<div className="ui four stackable cards">
			{players}
			{teams}
			{venues}
			{owners}
		</div>
	);
};

export default DisplayEvents;
