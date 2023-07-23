import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function Alert({ message, close }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, y: 80, scale: 0.6, transition: { duration: 0.2 } }}
      className="rounded-2xl bg-white px-6 py-7 w-96 text-center text-subtitle text-black"
    >
      {message}

      <Button
        onClick={() => close()}
        className="w-full mt-5 focus:outline-none"
        autoFocus
      >
        확인
      </Button>
    </motion.div>
  );
}
