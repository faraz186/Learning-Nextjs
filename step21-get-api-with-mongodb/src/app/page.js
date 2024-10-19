import styles from './page.module.css'
import Link from 'next/link'

export default function Home()
{
    return(
        <main className={styles.main}>
            <Link href="/products">Products</Link>  
            <Link href="/addproduct">Add Products</Link>
        </main>
    )
}
