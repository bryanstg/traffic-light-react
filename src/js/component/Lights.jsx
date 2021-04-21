import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Light } from "./Light.jsx";
import { removeData } from "jquery";

export function Lights() {
	const [lightActive, setLightActive] = useState(false);
	const [colorsLight, setColorsLight] = useState([
		{ color: "red", selected: false },
		{ color: "yellow", selected: false },
		{ color: "green", selected: false }
	]);

	const handleLight = (event, index) => {
		let newColors = [];
		for (let i = 0; i < colorsLight.length; i++) {
			if (index == i) {
				newColors.push({
					...colorsLight[i],
					selected: true
				});
			} else {
				newColors.push({
					...colorsLight[i],
					selected: false
				});
			}
		}
		setColorsLight(newColors);
	};

	return (
		<React.Fragment>
			{colorsLight.map((colorObject, index) => {
				return (
					<Light
						key={index}
						lightColor={colorObject.color}
						handler={e => handleLight(e, index)}
						selected={colorObject.selected}
					/>
				);
			})}
		</React.Fragment>
	);
}
