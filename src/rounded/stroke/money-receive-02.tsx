import React from "react";
const MoneyReceive_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 14.001a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7.003c1.945.085 3.323.404 4.133.655.543.168.867.682.867 1.25v9.775c0 1.115-1.228 1.954-2.324 1.747-.94-.177-2.165-.32-3.676-.32-4.75 0-5.89 1.806-12.855.27A1.47 1.47 0 0 1 2 18.94V8.921c0-.976.92-1.687 1.878-1.497 1.438.285 2.612.418 3.622.455"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 11.001c1.951 0 3.705-1.595 3.929-3.246M18.5 7.501c0 2.04 1.765 3.969 3.5 3.969m0 5.531c-1.9 0-3.74 1.31-3.898 3.098M6 20.497a4 4 0 0 0-4-4M12 8.501v-5.5m0 5.5c.7 0 2.5-2.5 2.5-2.5m-2.5 2.5c-.7 0-2.5-2.5-2.5-2.5"
      />
    </svg>
  );
};
export default MoneyReceive_02;
