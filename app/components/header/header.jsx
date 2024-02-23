import React from 'react'
import Image from 'next/image'
import Image1 from '../../assets/top-left.png'
import Image2 from '../../assets/top-right.png'
import Image3 from '../../assets/bottom-left.png'
import Image4 from '../../assets/bottom-right.png'
import styles from './header.module.css'
import Link from 'next/link'
import next from 'next'

const header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.headerLeft}>
                <h1>Qualquer abobora pq eu edito depois</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id! Quidem nisi dolor atque, quos,
                    tempora eveniet voluptatibus voluptas modi earum esse necessitatibus quo nemo accusamus beatae alias odit vel.
                </p>
                <div className={styles.headerCta}>
                    <Link href="/portfolio" className="btn">Projects</Link>
                    <Link href="/contact" className="btn primary">Contact Me</Link>
                </div>
            </div>
            <div className={styles.headerRight}>
                <article className={styles.card1}>
                    <Image src={Image1} alt=""/>
                </article>
                <article className={styles.card2}>
                    <Image src={Image2} alt=""/>
                </article>
                <article className={styles.card3}>
                    <Image src={Image3} alt=""/>
                </article>
                <article className={styles.card4}>
                    <Image src={Image4} alt=""/>
                </article>
            </div>

        </header>
    )
}

export default header