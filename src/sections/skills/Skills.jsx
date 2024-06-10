import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import {useTheme} from '../../common/ThemeContext'

function skills() {
const{theme}=useTheme();
const checkMarkIcon = theme==='light'?checkMarkIconLight:checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML' />
            <SkillList src={checkMarkIcon} skill='CSS' />
            <SkillList src={checkMarkIcon} skill='JavaScript' />
            <SkillList src={checkMarkIcon} skill='ReactJS' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='React' />
            <SkillList src={checkMarkIcon} skill='Angular' />
            <SkillList src={checkMarkIcon} skill='Boot' />
            <SkillList src={checkMarkIcon} skill='telwin' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Redux' />
            <SkillList src={checkMarkIcon} skill='Webpaack' />
            <SkillList src={checkMarkIcon} skill='Git' />
            <SkillList src={checkMarkIcon} skill='booty' />
        </div>
        <hr />
    </section>
  )
}

export default skills