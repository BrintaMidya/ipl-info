import React from "react";
import DisplayEvents from "./DisplayEvents";
import SearchBar from "./SearchBar";
import data from "./data/data.json";

class App extends React.Component {
	state = { searchFilter: "", players: [], teams: [], venues: [], owners: [] };

	componentDidMount() {
		this.setState({
			players: data.players,
			teams: data.teams,
			venues: data.venues,
			owners: data.owners,
		});
		console.log(data);
	}
	onSearchEvents = (term) => {
		this.setState({ searchFilter: term });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<div>
					<h1>Conference Hub</h1>
				</div>
				<SearchBar onSearch={this.onSearchEvents} />
				<DisplayEvents
					players={this.state.players}
					teams={this.state.teams}
					venues={this.state.venues}
					owners={this.state.owners}
				/>
			</div>
		);
	}
}

export default App;
