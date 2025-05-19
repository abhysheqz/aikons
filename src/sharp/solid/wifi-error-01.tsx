import React from "react";
const WifiError_01: React.FC<
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
        d="M22 5.964c-3.133-2.45-6.544-3.714-10-3.714S5.133 3.514 2 5.964l1.315 1.51C6.126 5.3 9.085 4.25 12 4.25s5.874 1.05 8.685 3.225z"
      />
      <path
        fill="currentColor"
        d="m17.71 10.891 1.314-1.508c-4.108-3.527-9.75-3.495-14.046.002l1.314 1.51C9.864 8.02 14.39 8.05 17.71 10.89"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.643 10.614a.75.75 0 0 0-1.286 0l-6 10A.75.75 0 0 0 6 21.75h12a.75.75 0 0 0 .643-1.136zm.107 6.886v-3h-1.5v3zm.009 1H11.25V20h1.509z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiError_01;
