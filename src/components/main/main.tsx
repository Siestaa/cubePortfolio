import { useState } from 'react'
import { Cube } from './components/cube/cube'
import { Navigation } from './components/navigation/navigation'
import styles from './main.module.css'
import { ISide } from './main.types'

const portfolioSides: ISide[] = [
	{ id: 1, side: "aboutMe", transform: "rotateX(0deg) rotateY(0deg)", titleRu: "Обо мне", titleEn: "About Me", color: "rgba(159, 180, 208, 1)" },
	{ id: 2, side: "skills", transform: "rotateY(180deg) rotateX(0deg)", titleRu: "Навыки", titleEn: "Skills", color: "rgba(161, 133, 222)" },
	{ id: 3, side: "experience", transform: "rotateY(-90deg) rotateX(0deg)", titleRu: "Опыт", titleEn: "Experience", color: "rgba(247, 158, 173, 1)" },
	{ id: 4, side: "portfolio", transform: "rotateY(90deg) rotateX(0deg)", titleRu: "Проекты", titleEn: "Portfolio", color: "rgba(255, 237, 132, 1)" },
	{ id: 5, side: "contact", transform: "rotateX(-90deg) rotateY(0deg)", titleRu: "Контакты", titleEn: "Contact", color: "rgba(138, 196, 88, 1)" },
	{ id: 6, side: "cat", transform: "rotateX(90deg) rotateY(0deg)", titleRu: "Бонус", titleEn: "Bonus", color: "rgba(250, 191, 102, 1)" }
]

export const Main = () => {
	const [currentSide, setCurrentSide] = useState<ISide>(portfolioSides[0])
	const [prevSide, setPrevSide] = useState<ISide>(portfolioSides[0])

	return (
		<div className={styles.cubeContainer}>
			<Navigation sides={portfolioSides} setPrevSide={setPrevSide} setCurrentSide={setCurrentSide} currentSide={currentSide} />
			<Cube sides={portfolioSides} currentSide={currentSide} prevSide={prevSide} />
		</div>
	)
}