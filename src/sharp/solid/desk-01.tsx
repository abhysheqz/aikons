import React from "react";
const Desk_01: React.FC<
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
        d="M5 9.25h16V5.5h1v-2H2v2h1v15h2zM13.5 20.5H21v-5.25h-7.5z"
      />
      <path fill="currentColor" d="M13.5 13.75v-3H21v3z" />
    </svg>
  );
};
export default Desk_01;
