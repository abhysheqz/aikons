import React from "react";
const Angle_01: React.FC<
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
        d="m19.474 4.364-9.168 9.814c1.168 1.215 1.94 2.928 2.142 4.822H21.5v2h-18a1 1 0 0 1-.732-1.682L18.011 3z"
      />
    </svg>
  );
};
export default Angle_01;
