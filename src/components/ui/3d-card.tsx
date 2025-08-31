// "use client";

// import { cn } from "@/lib/index";

// import React, {
//   createContext,
//   useState,
//   useContext,
//   useRef,
//   useEffect,
// } from "react";

// const MouseEnterContext = createContext<
//   [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
// >(undefined);

// export const CardContainer = ({
//   children,
//   className,
//   containerClassName,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMouseEntered, setIsMouseEntered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } =
//       containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//   };

//   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsMouseEntered(true);
//     if (!containerRef.current) return;
//   };

//   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     setIsMouseEntered(false);
//     containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   };
//   return (
//     <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//       <div
//         className={cn(
//           "py-20 flex items-center justify-center",
//           containerClassName
//         )}
//         style={{
//           perspective: "1000px",
//         }}
//       >
//         <div
//           ref={containerRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className={cn(
//             "flex items-center justify-center relative transition-all duration-200 ease-linear",
//             className
//           )}
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     </MouseEnterContext.Provider>
//   );
// };

// export const CardBody = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const CardItem = ({
//   as: Tag = "div",
//   children,
//   className,
//   translateX = 0,
//   translateY = 0,
//   translateZ = 0,
//   rotateX = 0,
//   rotateY = 0,
//   rotateZ = 0,
//   ...rest
// }: {
//   as?: React.ElementType;
//   children: React.ReactNode;
//   className?: string;
//   translateX?: number | string;
//   translateY?: number | string;
//   translateZ?: number | string;
//   rotateX?: number | string;
//   rotateY?: number | string;
//   rotateZ?: number | string;
//   [key: string]: any;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isMouseEntered] = useMouseEnter();

//   useEffect(() => {
//     handleAnimations();
//   }, [isMouseEntered]);

//   const handleAnimations = () => {
//     if (!ref.current) return;
//     if (isMouseEntered) {
//       ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//     } else {
//       ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
//     }
//   };

//   return (
//     <Tag
//       ref={ref}
//       className={cn("w-fit transition duration-200 ease-linear", className)}
//       {...rest}
//     >
//       {children}
//     </Tag>
//   );
// };

// // Create a hook to use the context
// export const useMouseEnter = () => {
//   const context = useContext(MouseEnterContext);
//   if (context === undefined) {
//     throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//   }
//   return context;
// };







"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from "react";

// Simple classNames utility
const cn = (...classes: (string | undefined)[]) => 
  classes.filter(Boolean).join(" ");

// Context for mouse tracking
interface MouseEnterContextType {
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const contextValue: MouseEnterContextType = {
    isMouseEntered,
    setIsMouseEntered
  };

  return (
    <MouseEnterContext.Provider value={contextValue}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardItemProps {
  children: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}

export const CardItem: React.FC<CardItemProps> = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isMouseEntered } = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
    >
      {children}
    </div>
  );
};

// Demo component to show the 3D card in action
export default function ThreeDCardDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-8">
      <CardContainer containerClassName="w-full">
        <CardBody className="bg-gray-100 rounded-xl p-8 border-2 border-white/10 shadow-2xl">
          <CardItem
            translateZ="100"
            className="w-full text-center mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">3D Card</h2>
          </CardItem>
          <CardItem
            translateZ="80"
            className="w-full mb-6"
          >
            <p className="text-gray-600 text-center">
              Hover over this card to see the 3D effect in action!
            </p>
          </CardItem>
          <CardItem
            translateZ="120"
            rotateX={10}
            className="w-full flex justify-center"
          >
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg">
              Click Me
            </button>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}