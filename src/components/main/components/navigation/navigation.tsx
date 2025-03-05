import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { ISide } from '../../main.types'
import styles from "./navigation.module.css"

interface NavigationProps {
	sides: ISide[]
	setPrevSide: (side: ISide) => void,
	setCurrentSide: (side: ISide) => void,
	currentSide: ISide
}

export const Navigation = ({ sides, setCurrentSide, setPrevSide, currentSide }: NavigationProps) => {

	const highlightRef = useRef<HTMLDivElement | null>(null)
	const listRef = useRef<HTMLDivElement | null>(null)

	const [isChanging, setIsChanging] = useState(false)

	const handleClick: React.MouseEventHandler<HTMLSpanElement> = (event) => {
		if (isChanging) {
			return
		} else {
			const target = event.target as HTMLSpanElement
			const sideId = parseInt(target?.dataset?.side ?? '0', 10)

			if (sideId && sideId !== currentSide.id) {
				const newSide = sides.find((item) => item.id === sideId)
				if (newSide) {
					setPrevSide(currentSide)
					setCurrentSide(newSide)
				}
			}
		}
	}

	useGSAP(() => {
		if (listRef.current && highlightRef.current && !isChanging) {
			const currentItem = listRef.current.querySelector(`[data-side="${currentSide.id}"]`)
			if (currentItem) {
				const currentRect = currentItem.getBoundingClientRect()
				const listRect = listRef.current.getBoundingClientRect()
				gsap.to(highlightRef.current, {
					duration: 1,
					width: currentRect.width,
					left: currentRect.left - listRect.left,
					backgroundColor: currentSide.color,
					immediateRender: false,
					onStart: () => {
						setTimeout(() => setIsChanging(true), 0)
					},
					onComplete: () => {
						setTimeout(() => setIsChanging(false), 1000)
					}
				})
			}
		}
	}, [currentSide])

	return (
		<div className={styles.sideList} ref={listRef}>
			{sides.map((side) => (
				<span
					key={side.id}
					data-side={side.id}
					onClick={handleClick}
					className={styles.listItem}
				>
					{side.titleRu}
				</span>
			))}
			<div className={styles.highlight} ref={highlightRef}></div>
		</div>
	)
}
