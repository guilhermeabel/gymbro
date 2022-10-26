import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { Exercise } from "./Exercise";

function Workout() {
	const [workout, setWorkout] = useState("");
	const [exercises, setExercises] = useState([]);

	async function fetchExercises() {
		const res = await fetch("../api/getData");
		const newExercises = await res.json();
		setExercises(newExercises);
	}

	useEffect(() => {
		fetchExercises();
	}, [exercises]);

	const handleinput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWorkout(e.target.value);
	};

	const HandleSubmit = () => {
		console.log(workout);
	};

	return (
		<div className={styles.maincont}>
			<h1>Workout</h1>
			<div className={styles.workout}>
				<h3>Add new exercise</h3>
				<div className={styles.semi}>
					<input
						type="text"
						value={workout}
						onChange={(e) => handleinput(e)}
					></input>
					<button onClick={() => HandleSubmit()}>
						Add Exercise
					</button>
				</div>
			</div>
			<div>
				{
					exercises &&
					exercises.map((exercise) => (
						// @ts-ignore
						<Exercise key={exercise.ref["@ref"].id} exercise={exercise} />
					))
				}
			</div>
		</div>
	);
}

export default Workout;
