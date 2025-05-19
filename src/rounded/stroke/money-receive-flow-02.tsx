import React from "react";
const MoneyReceiveFlow_02: React.FC<
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
        d="M14.5 13.501a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 6.55c1.683.113 2.894.398 3.633.627.543.168.867.683.867 1.25v9.756c0 1.115-1.228 1.954-2.324 1.747-.94-.177-2.165-.32-3.676-.32-4.75 0-5.89 1.806-12.855.27A1.47 1.47 0 0 1 2 18.439V8.422c0-.976.92-1.688 1.878-1.498.988.196 1.851.32 2.622.391"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10.501c1.951 0 3.705-1.595 3.929-3.246M18.5 7.001c0 2.04 1.765 3.969 3.5 3.969m0 5.531c-1.9 0-3.74 1.31-3.898 3.098M6 19.997a4 4 0 0 0-4-4M12 7.501v-4m3 4v-2m-6 2v-2"
      />
    </svg>
  );
};
export default MoneyReceiveFlow_02;
