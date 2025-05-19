import React from "react";
const TurtleNeck: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.961 13.06 4.5 21 2 20 4 7.5l5-2.983V2h6v2.512L20 7.5 22 20l-2.5 1-2.462-7.94"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M17 10v12H7V10" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5a5 5 0 0 0 6 0"
      />
    </svg>
  );
};
export default TurtleNeck;
