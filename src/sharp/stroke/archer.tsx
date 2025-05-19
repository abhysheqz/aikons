import React from "react";
const Archer: React.FC<
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
        d="m11 17.026 9 3.97c-.556-.555-1.51-2.356-.884-5.115.782-3.448 2.25-6.916-3.18-8.819-1.903-5.428-5.371-3.96-8.82-3.178C4.356 4.51 2.556 3.555 2 3l4 9.072"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 17.997H2l3-2.999h3v3l-3 2.999zM7.988 15.01 19.544 3.444m-3.13-.452h3.58V6.5"
      />
    </svg>
  );
};
export default Archer;
