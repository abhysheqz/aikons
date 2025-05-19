import React from "react";
const Airplane_01: React.FC<
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
        strokeWidth={1.5}
        d="m9.174 21.004-1.92-4.027-4.241-1.826a.01.01 0 0 1-.006-.012l.774-2.207a.01.01 0 0 1 .011-.007l4.222.396 2.664-2.923-6.522-3.68a.01.01 0 0 1-.002-.016L6.457 4.52l7.376 1.824c1.304-1.189 2.527-2.712 4.138-3.143 1.733-.463 3.227.043 3.588.212.327.674.64 1.959.302 3.165-.339 1.205-.709 1.683-3.38 4.171l1.923 6.969-2.307 2.215a.01.01 0 0 1-.017-.002l-3.907-6.18-3.054 2.513.4 4.027a.01.01 0 0 1-.008.01l-2.324.71a.01.01 0 0 1-.013-.006Z"
      />
    </svg>
  );
};
export default Airplane_01;
