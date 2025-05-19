import React from "react";
const Hold_01: React.FC<
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
        d="M14 5.5a1.5 1.5 0 0 1 3 0V12m-3-6.5v-2a1.5 1.5 0 0 0-3 0V5m3 .5V11m-3-6a1.5 1.5 0 0 0-3 0v8.462l-1.62-1.625a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l3.6 4.598C8.126 19.527 8.5 20.883 8.5 22M11 5v5m7 12v-1.164a2.2 2.2 0 0 1 .565-1.44c.405-.462.912-1.102 1.104-1.604.331-.865.331-1.952.331-4.125V7.5a1.5 1.5 0 0 0-3 0"
      />
    </svg>
  );
};
export default Hold_01;
