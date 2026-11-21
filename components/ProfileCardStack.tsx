"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const PROFILE_IMAGES = [
  "/assets/fotoprofil/profilsaya.webp",
  "/assets/fotoprofil/profilesaya2.jpeg",
];

export function ProfileCardStack() {
  const [cards, setCards] = useState(PROFILE_IMAGES);

  const moveToEnd = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
  };

  return (
    <div className="relative size-56 lg:size-72">
      <AnimatePresence mode="popLayout">
        {cards.map((src, index) => {
          const isTop = index === 0;
          return (
            <motion.div
              key={src}
              style={{
                zIndex: cards.length - index,
                cursor: isTop ? "grab" : "default",
              }}
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{
                scale: 1 - index * 0.05,
                y: index * 10,
                x: 0,
                opacity: 1 - index * 0.2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.2,
              }}
              exit={{
                x: 150,
                opacity: 0,
                rotate: 15,
                transition: { duration: 0.2 },
              }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 50) moveToEnd();
              }}
              onClick={isTop ? moveToEnd : undefined}
              className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-primary/20 bg-muted shadow-xl"
            >
              <Image
                src={src}
                alt="Profile Muhammad Iqbal Saputra"
                fill
                sizes="(min-width: 1024px) 288px, 224px"
                className="object-cover pointer-events-none select-none"
                priority={isTop}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
