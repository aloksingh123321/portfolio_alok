import { cn } from "@/lib/utils";

interface AsteriskDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const AsteriskDecoration = ({ 
  className, 
  size = "md", 
  animated = true 
}: AsteriskDecorationProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  };

  return (
    <span 
      className={cn(
        "text-primary font-bold select-none",
        sizeClasses[size],
        animated && "animate-float",
        className
      )}
    >
      ✳
    </span>
  );
};

export default AsteriskDecoration;
