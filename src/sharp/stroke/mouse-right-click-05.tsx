import React from "react";
const MouseRightClick_05: React.FC<
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
        d="M11 5.5V2m0 10V9M13.5 2.318C12.77 2.111 11.94 2 11 2 5 2 3.5 6.51 3.5 12S5 22 11 22s7.5-4.51 7.5-10q0-.765-.041-1.5M4 12h14"
      />
      <circle
        cx={18}
        cy={5.5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 5.5h-3V9h3z"
      />
    </svg>
  );
};
export default MouseRightClick_05;
