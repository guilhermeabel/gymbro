import React from "react";
import styles from "../../styles/Home.module.css";
import { IExercise } from "../types";

export const Exercise = ({ exercise }: { exercise: IExercise }) => {
	const handleDelete = () => {
	};

	if (!exercise) {
		return <></>
	}

	return (
		<div>
			<span className={styles.exercise}>
				<h3 className={styles.text}>{exercise.name}</h3>
				{Object.values(exercise).map((val) => <p key={val.id} className={styles.text}>{val}</p>)}

				<div>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</span>
		</div>
	);
}
