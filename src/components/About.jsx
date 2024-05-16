import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
      >
        <img
          src={icon}
          alt="web-development"
          className="h-16 w-16 object-contain"
        />
        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </Tilt>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I am a full-stack developer with a passion for building web
        applications. I have experience working with various technologies and
        frameworks. I am always looking to learn new things and improve my
        skills.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
