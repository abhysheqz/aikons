import React from "react";
const PathfinderOutline: React.FC<
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
        strokeWidth={1.5}
        d="M9.026 12.996c.062-1.256.236-2.064.73-2.683a3.5 3.5 0 0 1 .555-.555c.62-.494 1.427-.668 2.683-.73M16.996 9c1.852.024 2.913.144 3.684.758q.308.247.554.555c.764.958.764 2.366.764 5.184s0 4.227-.764 5.185q-.246.308-.554.554c-.958.764-2.367.764-5.185.764s-4.226 0-5.184-.764a3.5 3.5 0 0 1-.555-.554c-.614-.77-.734-1.833-.758-3.684"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.972 11.004c-.062 1.256-.236 2.064-.73 2.683q-.247.308-.555.555c-.62.494-1.427.668-2.683.73M7.002 15c-1.851-.024-2.913-.144-3.684-.758a3.5 3.5 0 0 1-.554-.555C2 12.73 2 11.321 2 8.503s0-4.227.764-5.185q.246-.308.554-.554C4.276 2 5.685 2 8.503 2s4.226 0 5.184.764q.308.246.555.554c.614.77.734 1.833.758 3.684"
      />
    </svg>
  );
};
export default PathfinderOutline;
