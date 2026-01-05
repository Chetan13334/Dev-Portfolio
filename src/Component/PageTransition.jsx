import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        className="page-loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <motion.div
                            className="loader-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="loader-spinner" />
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="loader-text"
                            >
                                Loading Experience...
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>

            <style>{`
        .page-loader {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #030014 0%, #0a0118 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }

        .loader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .loader-spinner {
          width: 60px;
          height: 60px;
          border: 3px solid rgba(124, 58, 237, 0.1);
          border-top-color: #7C3AED;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loader-text {
          color: white;
          font-size: 1.125rem;
          font-weight: 300;
          letter-spacing: 0.1em;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </>
    );
};

export default PageTransition;
