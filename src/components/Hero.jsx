import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero w-full flex items-cebnter justify-center pt-[25px] h-screen">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-[53px] font-medium max-w-[500px]">
            Track Your Water Intake Easily!
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-[17px] text-gray-600 max-w-[600px]">
              Regularly monitoring your water consumption can lead to feeling
              more energized throughout the day.
            </p>
            <p className="text-[17px] text-gray-600 max-w-[600px]">
              Consistently keeping tabs on your water intake can result in
              increased vitality throughout your day.
            </p>
          </div>
        </div>
        <div className="flex">{/* <img src={Charts} /> */}</div>
      </motion.div>
    </div>
  );
};

export default Hero;
