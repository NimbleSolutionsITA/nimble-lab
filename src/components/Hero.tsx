import './Hero.css'
import Logo from "./Logo.tsx";
import {config, useSpring} from "@react-spring/web";
import React from "react";

function Hero() {
	const [{ fill }] = useSpring(
		() => ({
			from: { fill: 'var(--step0)' },
			to: [
				{ fill: 'var(--step0)' },
				{ fill: 'var(--step1)' },
				{ fill: 'var(--step2)' },
				{ fill: 'var(--step3)' },
				{ fill: 'var(--step4)' },
			],
			config: config.molasses,
			loop: {
				reverse: true,
			},
		}),
		[]
	)
	return (
		<>
			<div id="hero">
				<Logo style={{fill, width: '300px'} as unknown as React.CSSProperties} />
			</div>
		</>
	)
}

export default Hero
