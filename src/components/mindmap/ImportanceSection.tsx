import React from "react";
import { motion } from "framer-motion";
import { contentText } from "@/lib/text";

interface ImportanceSectionProps {
  animationDelay: number;
}

export const ImportanceSection: React.FC<ImportanceSectionProps> = ({ animationDelay }) => {
  return (
    <div className="mt-8 bg-orange-100/20 backdrop-blur-xl rounded-xl w-full items-center justify-between p-6 flex flex-row relative z-10 border border-orange-300/30 shadow-2xl shadow-orange-900/10">
      <motion.div 
        key="importance-main"
        className="bg-gradient-to-br from-orange-600/90 to-amber-700/90 backdrop-blur-lg rounded-xl w-1/3 justify-center p-6 flex relative shadow-xl shadow-orange-900/30 border border-orange-400/20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl text-center font-bold text-white drop-shadow-lg">
          {contentText.importance.title}
        </h2>
      </motion.div>

      {/* Connection Lines Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical line from main title */}
        <motion.div 
          className="absolute left-[37%] mt-10 w-3 bg-gradient-to-b from-amber-600/80 to-orange-600/80 backdrop-blur-sm rounded-full shadow-lg"
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 80px)" }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        />
        {/* All horizontal connecting lines */}
        {[150].map((topPosition, index) => (
          <motion.div
            key={`horizontal-line-${index}`}
            className="absolute left-[34%] w-12 h-2 bg-gradient-to-r from-amber-600/80 to-orange-600/80 backdrop-blur-sm rounded-full shadow-md"
            style={{ top: `${topPosition}px` }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "54px", opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        ))}
        {/* All horizontal connecting lines - unified approach */}
        {[75, 152, 230].map((topPosition, index) => (
          <motion.div
            key={`horizontal-line-${index}`}
            className="absolute left-[37%] w-12 h-2 bg-gradient-to-r from-amber-600/80 to-orange-600/80 backdrop-blur-sm rounded-full shadow-md"
            style={{ top: `${topPosition}px` }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "64px", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
            viewport={{ once: false, amount: 0.3 }}
          />
        ))}
      </div>

      <motion.div 
        key="importance-content"
        className="bg-orange-50/30 backdrop-blur-xl rounded-xl w-3/5 justify-between gap-4 flex-col p-6 flex ml-4 border border-orange-300/25 shadow-lg shadow-orange-900/5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className="bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-lg rounded-xl flex-col p-4 flex relative border border-orange-400/30 shadow-lg shadow-orange-900/20"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute -left-4 top-1/2 w-3 h-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-full transform -translate-y-1/2 shadow-md border border-orange-400/50"></div>
          <h3 className="text-lg text-center font-bold text-white drop-shadow-md">
            {contentText.importance.leadership.title}
          </h3>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-amber-500/80 to-orange-500/80 backdrop-blur-lg rounded-xl flex-col p-4 flex relative border border-amber-400/30 shadow-lg shadow-amber-900/20"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute -left-4 top-1/2 w-3 h-3 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full transform -translate-y-1/2 shadow-md border border-amber-400/50"></div>
          <h3 className="text-lg text-center font-bold text-white drop-shadow-md">
            {contentText.importance.decisive.title}
          </h3>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-red-500/80 to-red-600/80 backdrop-blur-lg rounded-xl flex-col p-4 flex relative border border-red-400/30 shadow-lg shadow-red-900/20"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute -left-4 top-1/2 w-3 h-3 bg-gradient-to-br from-red-600 to-red-700 rounded-full transform -translate-y-1/2 shadow-md border border-red-400/50"></div>
          <h3 className="text-lg text-center font-bold text-white drop-shadow-md">
            {contentText.importance.strength.title}
          </h3>
        </motion.div>
      </motion.div>
    </div>
  );
};