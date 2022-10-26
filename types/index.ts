export interface IExercise {
	id: number,
	name: string,
    reps: number,
    sets: number,
    initialWeight: number,
    increaseBy: number,
    every: "set" | "rep",
    weightMeasurement: "kg" | "lbs",
}
