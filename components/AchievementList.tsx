"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Medal } from "lucide-react";

export interface AchievementItem {
  title: string;
  description: string;
  date: string;
}

export function AchievementList({ items }: { items: AchievementItem[] }) {
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);

  const toggleAchievement = (index: number) => {
    setExpandedAchievement(expandedAchievement === index ? null : index);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 flex-1">
      {items.map((item, index) => {
        const isOpen = expandedAchievement === index;
        return (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)] flex flex-col justify-between p-5 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:shadow-sm h-fit"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary" className="text-[10px]">
                  {item.date}
                </Badge>
                <Medal className="size-5 text-primary" />
              </div>
              <button
                type="button"
                onClick={() => toggleAchievement(index)}
                className="flex items-center justify-between w-full text-left font-bold text-base tracking-tight group/btn cursor-pointer"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "size-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-2",
                    isOpen && "rotate-180 text-primary"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
