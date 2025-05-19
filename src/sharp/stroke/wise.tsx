import React from "react";
const Wise: React.FC<
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
        d="m12.524 10.973-7.513.058a.01.01 0 0 1-.007-.017l4.53-4.509-2.491-4.491a.01.01 0 0 1 .008-.015H18.99a.01.01 0 0 1 .01.014L11.03 22"
      />
    </svg>
  );
};
export default Wise;
