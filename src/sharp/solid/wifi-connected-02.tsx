import React from "react";
const WifiConnected_02: React.FC<
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
        d="M22 6.714C18.867 4.264 15.456 3 12 3S5.133 4.264 2 6.714l1.315 1.51C6.126 6.05 9.085 5 12 5s5.874 1.05 8.685 3.225z"
      />
      <path
        fill="currentColor"
        d="m17.71 11.641 1.314-1.508c-4.108-3.526-9.75-3.495-14.046.002l1.314 1.51C9.864 8.772 14.39 8.8 17.71 11.64"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.74 14.725 11.035 21 8.293 18.26l1.414-1.414 1.259 1.258 4.294-4.723z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiConnected_02;
