import PropTypes from "prop-types";

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	console.log(props.counter);
	return (
		<div className="text-center mt-5">
			<h1>SIMPLE COUNTER</h1>
			<div>{props.props1}</div>
			<div>{props.props2}</div>
			<div>{props.props3}</div>
			<div>{props.props4}</div>
			<div>{props.props5}</div>
			<div>{props.props6}</div>
		</div>
	);
}

Home.propTypes = {
	counter: PropTypes.number,
	props1: PropTypes.string,
	props2: PropTypes.string,
	props3: PropTypes.string,
	props4: PropTypes.string,
	props5: PropTypes.string,
	props6: PropTypes.string
};
