import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Light(props) {
	//const [activeLight, setActiveLight] = useState("");

	/* 	const light = {
		color: props.lightColor,
		selected: props.selected,
		activeClass: `${props.lightColor}__selected`
	}; */

	return (
		<div
			className={`
				${props.lightColor}
				${props.lightColor}${props.selected ? "__selected" : ""}
				light
				`}
			onClick={props.handler}></div>
	);
}

Light.propTypes = {
	lightColor: PropTypes.string,
	selected: PropTypes.bool,
	handler: PropTypes.func
};
