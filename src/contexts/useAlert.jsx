import Alert from "@/components/Alert";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useState } from "react";

export const AlertContext = createContext({
  push: () => {},
});

export default function AlertContextProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState(null);
  const push = ({ message, onClose }) => setAlertMessage({ message, onClose });

  return (
    <AlertContext.Provider value={{ push }}>
      <AnimatePresence>
        {alertMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-black/20 flex items-center justify-center"
          >
            <Alert
              message={alertMessage.message}
              close={() => {
                setAlertMessage(null);
                alertMessage.onClose();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext);
