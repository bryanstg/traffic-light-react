import React from "react";
import { Light } from "./Light.jsx";
import { Lights } from "./Lights.jsx";

//include images into your bundle

//create your first component
export function Container() {
	return (
		<div className="traffic-container">
			<div className="traffic__box">
				<div className="taffic__box--top"></div>
				<div className="traffic__box--bottom">
					<Lights />
				</div>
			</div>
		</div>
	);
}
