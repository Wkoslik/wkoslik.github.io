import Header from './partials/Header'
import About from './about'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
    <About />
    </div>
  )
}
