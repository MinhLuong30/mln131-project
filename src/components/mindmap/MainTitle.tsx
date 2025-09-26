import React from "react";
import { motion } from "framer-motion";
import { contentText } from "@/lib/text";

export const MainTitle: React.FC = () => {
  return (
    <div className="vietnam-gradient rounded-lg w-full p-6 text-center flex items-center justify-center relative z-10">
      <h2 className="text-2xl text-center font-bold text-primary-foreground">
        {contentText.hero.title} - {contentText.hero.subtitle}
      </h2>
    </div>
  );
};