import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/all'
import { useRef } from 'react'
import styles from "./aboutMe.module.css"

interface AboutMeProps {
	currentSide: string
}

export const AboutMe = ({ currentSide }: AboutMeProps) => {

	const portfolioImage = useRef<HTMLImageElement | null>(null)
	const plastImage = useRef<HTMLImageElement | null>(null)
	const photo = useRef<HTMLImageElement | null>(null)
	const tape = useRef<HTMLImageElement | null>(null)
	const tape2 = useRef<HTMLImageElement | null>(null)
	const tape3 = useRef<HTMLImageElement | null>(null)
	const text = useRef<HTMLSpanElement | null>(null)

	gsap.registerPlugin(TextPlugin)

	useGSAP(() => {
		if (currentSide === 'aboutMe') {
			gsap.from(portfolioImage.current, { xPercent: -200, yPercent: 100, z: 500 })
			gsap.from(plastImage.current, { x: 200, y: -500, z: 500, rotate: 0 })
			gsap.from(photo.current, { xPercent: -200, yPercent: 100, z: 500 })
			gsap.from(tape.current, { xPercent: -200, yPercent: 100, z: 500 })
			gsap.from(tape2.current, { xPercent: -200, yPercent: 100, z: 500 })
			gsap.from(tape3.current, { xPercent: -200, yPercent: 100, z: 500 })
			gsap.to(portfolioImage.current, {
				keyframes: {
					xPercent: [-200, -100, 0, 0, 0],
					yPercent: [100, 70, 30, 10, 0],
					z: [500, 500, 300, 150, 0],
					easeEach: "none"
				},
				duration: 2,
				paused: false,
			})
			gsap.to(plastImage.current, {
				keyframes: {
					x: [500, 200, 100, 0, 0],
					y: [500, 200, 100, 0, 0],
					z: [500, 500, 300, 150, 0],
					easeEach: "none"
				},
				duration: 3,
				paused: false,
			})
			gsap.to(photo.current, {
				keyframes: {
					x: [500, 200, 100, 0, 0],
					y: [500, 200, 100, 0, 0],
					z: [500, 500, 300, 150, 0],
					easeEach: "none"
				},
				duration: 2,
				paused: false,
			})
			gsap.to(tape.current, {
				keyframes: {
					x: [500, 200, 100, 0, 0],
					y: [500, 200, 100, 0, 0],
					z: [500, 500, 300, 150, 0],
					easeEach: "none"
				},
				duration: 2.5,
				paused: false,
			})
			gsap.to(tape2.current, {
				keyframes: {
					x: [500, 200, 100, 0, 0],
					y: [500, 200, 100, 0, 0],
					z: [500, 500, 300, 150, 0],
					easeEach: "none"
				},
				duration: 3,
				paused: false,
			})
			gsap.to(tape3.current, {
				keyframes: {
					x: [500, 200, 100, 0, 0],
					y: [500, 200, 100, 0, 0],
					z: [500, 500, 300, 150, 0],
					easeEach: "none"
				},
				duration: 3.5,
				paused: false,
			})
			gsap.to(text.current, {
				duration: 4,
				text: {
					value: "Привет, меня зовут Лёша.<br>Я занимаюсь Frontend разработкой.<br>Интересуюсь разработкой функциональной части, версткой и красивой анимацией веб приложений. Нахожусь в постоянном развитии, страраюсь использовать новые технологии в своих проектах, ответственно подхожу к результату.",
					delimiter: "",
				}
			})
		}


	}, [])

	return (
		<div className={styles.sideContainer}>
			<div className={styles.headImgShadow} />
			<img className={styles.headImg} ref={portfolioImage} src='/portfolio.png' width={400} height={250} />
			<img className={styles.plastImg} ref={plastImage} src='/plast.png' />
			<div className={styles.photoShadow} />
			<img className={styles.photo} ref={photo} src='/photo.png' width={250} height={300} />
			<img className={styles.tape} id={styles.tape1} ref={tape} src='/tape.png' />
			<img className={styles.tape} id={styles.tape2} ref={tape2} src='/tape2.png' />
			<img className={styles.tape} id={styles.tape3} ref={tape3} src='/tape3.png' />
			<span ref={text} className={styles.text} />
		</div>
	)
}
