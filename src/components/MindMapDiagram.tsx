import React from "react";
import { motion } from "framer-motion";
import { contentText } from "@/lib/text";

const MindMapDiagram = () => {
  return (
    <div>
      <motion.div
        className="bg-card flex flex-col rounded-lg border p-12 text-center mb-12 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Main Title */}
        <div className="vietnam-gradient rounded-lg w-full p-6 text-center flex items-center justify-center relative z-10">
          <h2 className="text-2xl text-center font-bold text-primary-foreground">
            {contentText.hero.title} - {contentText.hero.subtitle}
          </h2>
        </div>

        {/* Connection Lines Container */}
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
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
            />
          ))}

          
         
        </div>

        {/* Concept Section */}
        <div className="mt-8 bg-muted/30 rounded-lg w-full items-center justify-between p-6 flex flex-row relative z-10">
          <motion.div className="bg-primary rounded-lg w-1/3 justify-center p-6 flex relative">
           
            <h2 className="text-3xl text-center font-bold text-primary-foreground">
              {contentText.concept.title}
            </h2>
          </motion.div>
          <motion.div className="bg-muted/50 rounded-lg w-2/3 justify-between gap-4 flex-col p-6 flex ml-4">
            <motion.div className="bg-primary/80 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-primary-foreground">
                {contentText.concept.political.title}
              </h3>
            </motion.div>
            <motion.div className="bg-primary/80 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-primary-foreground">
                {contentText.concept.economic.title}
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* Importance Section */}
        <div className="mt-8 bg-secondary/20 rounded-lg w-full items-center justify-between p-6 flex flex-row relative z-10">
          <motion.div className="bg-secondary rounded-lg w-1/3 justify-center p-6 flex relative">
           
            <h2 className="text-3xl text-center font-bold text-secondary-foreground">
              {contentText.importance.title}
            </h2>
          </motion.div>
          <motion.div className="bg-secondary/30 rounded-lg w-2/3 justify-between gap-4 flex-col p-6 flex ml-4">
            <motion.div className="bg-secondary/70 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-secondary-foreground">
                {contentText.importance.leadership.title}
              </h3>
            </motion.div>
            <motion.div className="bg-secondary/70 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-secondary-foreground">
                {contentText.importance.decisive.title}
              </h3>
            </motion.div>
            <motion.div className="bg-secondary/70 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-secondary-foreground">
                {contentText.importance.strength.title}
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* Structure Section */}
        <div className="mt-8 bg-muted/40 rounded-lg w-full items-center justify-between p-6 flex flex-row relative z-10">
          <motion.div className="bg-chart-3 rounded-lg w-1/3 justify-center p-6 flex relative">
            
            <h2 className="text-3xl text-center font-bold text-primary-foreground">
              {contentText.structure.title}
            </h2>
          </motion.div>
          <motion.div className="bg-muted/60 rounded-lg w-2/3 justify-between gap-4 flex-col p-6 flex ml-4">
            <motion.div className="bg-chart-3/80 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-primary-foreground">
                {contentText.structure.workingClass.title}
              </h3>
            </motion.div>
            <motion.div className="bg-chart-3/80 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-primary-foreground">
                {contentText.structure.peasantClass.title}
              </h3>
            </motion.div>
            <motion.div className="bg-chart-3/80 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-primary-foreground">
                {contentText.structure.intellectuals.title}
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* Alliance Section */}
        <div className="mt-8 bg-accent/20 rounded-lg w-full items-center justify-between p-6 flex flex-row relative z-10">
          <motion.div className="bg-accent rounded-lg w-1/3 justify-center p-6 flex relative">
            <h2 className="text-3xl text-center font-bold text-accent-foreground">
              {contentText.alliance.title}
            </h2>
          </motion.div>
          <motion.div className="bg-accent/30 rounded-lg w-2/3 justify-between gap-4 flex-col p-6 flex ml-4">
            <motion.div className="bg-accent/70 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-accent-foreground">
                {contentText.alliance.economic.title}
              </h3>
            </motion.div>
            <motion.div className="bg-accent/70 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-accent-foreground">
                {contentText.alliance.political.title}
              </h3>
            </motion.div>
            <motion.div className="bg-accent/70 rounded-lg flex-col p-4 flex" >
              <h3 className="text-lg text-center font-bold text-accent-foreground">
                {contentText.alliance.cultural.title}
              </h3>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default MindMapDiagram;
