import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center ">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 rounded-full sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Angel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop fullstack applications and websites
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
