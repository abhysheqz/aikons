import React from "react";
const Napkins_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M18 12 12 2 6 12l6 6z" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 9.5 12 14 7.5 9.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 13.5 18 16l-6 6-6-6 1.5-2.5"
      />
    </svg>
  );
};
export default Napkins_02;
