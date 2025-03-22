import { motion } from "framer-motion";
import { FC } from "react";

interface DetailProps {
  icon: React.ReactNode;
  info: string;
  description?: string;
}

const Detail: FC<DetailProps> = ({ icon, info, description = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center"
    >
      {icon}

      <p dangerouslySetInnerHTML={{ __html: info }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </motion.div>
  );
};

export default Detail;
