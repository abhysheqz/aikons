import React from "react";
const Pot_01: React.FC<
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
        d="m3.361 10.75.893 9.818A.75.75 0 0 0 5 21.25h14a.75.75 0 0 0 .747-.682l.892-9.818H22v-2H2v2zM9.051 3.297c.136-.327.519-.547.949-.547h4c.43 0 .813.22.949.547L15.72 5H20.5v2h-17V5h4.78z"
      />
    </svg>
  );
};
export default Pot_01;
