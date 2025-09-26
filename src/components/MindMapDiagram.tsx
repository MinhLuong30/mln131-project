import React from "react";
import { motion } from "framer-motion";
import { 
  MainTitle, 
  ConnectionLines, 
  ConceptSection, 
  ImportanceSection, 
  StructureSection, 
  AllianceSection 
} from "./mindmap";

const MindMapDiagram = () => {
  return (
    <div>
        
      <motion.div
        key="mindmap-container" // Add key to force re-render
        className="bg-card flex flex-col max-w-screen rounded-lg border p-12 text-center mb-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} // Change to animate instead of whileInView
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        
        <div className="absolute inset-0 bg-[url('/phusanA80.jpg')] bg-cover bg-center opacity-60 clip-path-diagonal"></div>

        {/* Main Title */}
        <MainTitle />

        {/* Connection Lines Container */}
        <ConnectionLines />

        {/* All Sections */}
        <ConceptSection animationDelay={0} />
        <ImportanceSection animationDelay={0} />
        <StructureSection animationDelay={0} />
        <AllianceSection animationDelay={0} />

      </motion.div>
    </div>
  );
};

export default MindMapDiagram;
