import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, type }) => {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0, transition: { type: "spring", stiffness: 250, damping: 20 } }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.35 }}
                    className={`
            fixed top-6 right-6 px-4 py-3 rounded-md shadow-lg z-[200]
            text-sm font-medium
            ${type === "success"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"}
          `}
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
