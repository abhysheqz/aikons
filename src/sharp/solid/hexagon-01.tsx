import React from "react";
const Hexagon_01: React.FC<
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
        d="m12 1.25 9.75 5.363v10.774L12 22.75l-9.75-5.363V6.613z"
      />
    </svg>
  );
};
export default Hexagon_01;
