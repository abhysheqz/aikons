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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.961 13.06 4.5 20.5 2 20 3.926 7.961a1 1 0 0 1 .475-.7L9 4.517V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.512l4.599 2.749a1 1 0 0 1 .474.7L22 20l-2.5.5-2.462-7.44"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10M9 5a5 5 0 0 0 6 0"
      />
    </svg>
  );
};
export default TurtleNeck;
