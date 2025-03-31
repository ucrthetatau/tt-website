import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/brothers.module.css";
import { classes, classMap, yearMap, officers, years, nameMap, brothers } from '../firebase/QueryDB.js'
import BrotherCard from "../components/BrotherCard.js"

const Brothers = () => {
	const [category, setCategory] = useState("Class");
	const [dimensions, setDimensions] = useState({ left: 0, width: 0 });
	const categoriesRef = useRef(null);

	useEffect(() => {
		const activeElement = categoriesRef.current?.querySelector(`.${styles.active}`);
		if (activeElement) {
			const containerRect = categoriesRef.current.getBoundingClientRect();
			const elementRect = activeElement.getBoundingClientRect();
			const left = elementRect.left - containerRect.left - 2;
			setDimensions({
				left: Math.round(left),
				width: Math.round(elementRect.width),
			});
		}
	}, [category]);

	return (
		<div className={styles.brothers}>
			<div className={styles.categories} ref={categoriesRef}>
				<div className={styles.selector} style={{ left: dimensions.left, width: dimensions.width }} />
				<h1 className={`${styles.category} ${category === "Class" ? styles.active : ""}`} onClick={() => setCategory("Class")}>
					Class
				</h1>
				<h1 className={`${styles.category} ${category === "Name" ? styles.active : ""}`} onClick={() => setCategory("Name")}>
					Name
				</h1>
				<h1 className={`${styles.category} ${category === "Year" ? styles.active : ""}`} onClick={() => setCategory("Year")}>
					Year
				</h1>
				<h1 className={`${styles.category} ${category === "Board" ? styles.active : ""}`} onClick={() => setCategory("Board")}>
					Officers
				</h1>
			</div>
			
			{category === "Class" && classes.map(currentClass => (
				<div key={currentClass} className={styles.Group}>
					<h1 className={styles.Title}>{currentClass + " Class"}</h1>
					<div className={styles.Members}>
						{classMap[currentClass]?.map((brotherId) => (
							<BrotherCard key={brotherId} brotherId={brotherId} />
						))}
					</div>
				</div>
			))}
			{category === "Year" && years.map(currentYear => (
				<div key={currentYear} className={styles.Group}>
					<h1 className={styles.Title}>{currentYear}</h1>
					<div className={styles.Members}>
						{yearMap[currentYear]?.map((brotherId) => (
							<BrotherCard key={brotherId} brotherId={brotherId} />
						))}
					</div>
				</div>
			))}
			{category === "Name" && Object.keys(nameMap).map(currentInitial => (
				<div key={currentInitial} className={styles.Group}>
					<h1 className={styles.Title}>{currentInitial.toUpperCase()}</h1>
					<div className={styles.Members}>
						{nameMap[currentInitial]?.map((brotherId) => (
							<BrotherCard key={brotherId} brotherId={brotherId} />
						))}
					</div>
				</div>
			))}
			{category === "Board" && Object.entries(officers).map(([currentTerm, positions]) => (
				<div key={currentTerm} className={styles.Group}>
					<h1 className={styles.Title}>{currentTerm}</h1>
					<div className={styles.Members}>
						{Object.entries(positions).sort(([roleA], [roleB]) => {
							const numA = parseInt(roleA.match(/^\d+/)[0]);
							const numB = parseInt(roleB.match(/^\d+/)[0]);
							return numA - numB; 
						}).map(([role, brotherId]) => (
							<div key={role} className={styles.boardMember}>
								<BrotherCard brotherId={brotherId} />
								<h2 className={styles.role}>{role.slice(1)}</h2>
							</div>
						))}
					</div>
				</div>
			)).reverse()}
		</div>
	);
};

export default Brothers;