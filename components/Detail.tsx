import { motion } from "framer-motion";
import { FC } from "react";

interface DetailProps {
  icon: React.ReactNode;
  info: string;
  description?: string;
  detail?: string;
}

const Detail: FC<DetailProps> = ({ icon, info, description = "", detail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center"
    >
      {icon}
      <h3 className="text-2xl font-semibold mb-2">{detail}</h3>
      <p dangerouslySetInnerHTML={{ __html: info }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </motion.div>
  );
};

export default Detail;
