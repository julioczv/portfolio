import React from 'react'
import Link from 'next/link'
import { MdDesignServices } from 'react-icons/md'
import { FaCode } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa6'
import styles from './services.module.css'

const Services = () => {
  return (
    <section className={styles.services}> 
        <div className={`container ${styles.serviceWrapper}`}> 
            <Link href="/services" className={`btn ${styles.service}`}>
                <span className='styles.icon'><MdDesignServices/></span>
                <h6 className={styles.title}>Ui/Ux Design</h6>
            </Link>
        </div>
    </section>
  )
}

export default ServicesSections