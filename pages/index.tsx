import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

	return (
		<div className={styles.container}>
			<Head>
				<title>GymBro</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">GymBro!</a>
				</h1>

				<p className={styles.description}>
					YEAAAAAAA BUDDY!
				</p>

				<div className={styles.grid}>
					<a href="" className={styles.card}>
						<h2>View &rarr;</h2>
						<p>I want to see all workout lists</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Create &rarr;</h2>
						<p>Add a new workout list</p>
					</a>

				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}

export default Home
