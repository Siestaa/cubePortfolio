import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { AboutMe } from '../../../aboutMe/aboutMe'
import { ISide } from '../../main.types'
import styles from "./cube.module.css"

interface CubeProps {
	sides: ISide[],
	currentSide: ISide,
	prevSide: ISide
}

export const Cube = ({ sides, currentSide, prevSide }: CubeProps) => {

	const containerRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		if (containerRef.current) {
			gsap.set(containerRef.current, { transform: currentSide.transform })
		}
	}, [])

	useGSAP(() => {
		if (containerRef.current && currentSide !== prevSide) {
			gsap.to(containerRef.current, {
				keyframes: {
					transform: [
						prevSide.transform,
						`translate3d(0, 0, -400px) ${prevSide.transform}`,
						`translate3d(0, 0, -400px) ${currentSide.transform}`,
						currentSide.transform
					]
				},
				duration: 3
			})

		}
	}, [currentSide])

	const renderSide = (side: string) => {
		switch (side) {
			case 'aboutMe':
				return <AboutMe currentSide={currentSide.side} />
			default:
				return side
		}
	}

	return (
		<div className={styles.cube} ref={containerRef}>
			{sides.map((side) => (
				<div
					key={side.id}
					className={styles.side}
					data-side={side.id}
					style={{ backgroundColor: `${side.color}` }}
				>
					{renderSide(side.side)}
				</div>
			))}
		</div>
	)
}
