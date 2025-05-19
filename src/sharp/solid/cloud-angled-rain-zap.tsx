import React from "react";
const CloudAngledRainZap: React.FC<
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
        d="m8.218 13.729 1.72 1.021-1.182 1.99h3L8.78 21.75l-1.72-1.021 1.181-1.99h-3zM14.106 20.792l1.5-3 1.788.895-1.5 3zM12.606 17.792l-1.5 3 1.788.895 1.5-3z"
      />
      <path
        fill="currentColor"
        d="M5.853 7.365a5.752 5.752 0 0 0-1.86 10.538l3.7-6.23 4.3 2.553-.603 1.013h3l-.81 1.364.753.377.6-1.2 4.473 2.236-.231.462a5.252 5.252 0 0 0-.928-10.175 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudAngledRainZap;
