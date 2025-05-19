import React from "react";
const WashingtonMonument: React.FC<
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
        fill="currentColor"
        d="M2 22.75h20v-1.5h-1.459l-1-3H4.46l-1 3H2zM8.058 6.75 6.539 17h4.462v-4h2v4h4.462L15.944 6.75zM8.28 5.25l.01-.074 3.142-3.664a.75.75 0 0 1 1.138 0l3.141 3.664.011.074z"
      />
    </svg>
  );
};
export default WashingtonMonument;
