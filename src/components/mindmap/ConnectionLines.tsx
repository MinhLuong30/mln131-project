import React from "react";
import { motion } from "framer-motion";

export const ConnectionLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Vertical line from main title */}
      <motion.div 
        className="absolute left-1/75 mt-22 w-3 bg-border"
        initial={{ height: 0 }}
        animate={{ height: "calc(100% - 280px)" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* All horizontal connecting lines - unified approach */}
      {[85, 275, 575, 920, 1260].map((topPosition, index) => (
        <motion.div
          key={`horizontal-line-${index}`}
          className="absolute left-1/65 w-12 h-2 bg-border"
          style={{ top: `${topPosition}px` }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "64px", opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 + (index * 0.6) }}
        />
      ))}
    </div>
  );
};