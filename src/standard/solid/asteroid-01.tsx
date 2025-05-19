import React from "react";
const Asteroid_01: React.FC<
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
        fillRule="evenodd"
        d="M10.124 4.084a.75.75 0 0 0-.934-.267l-5.5 2.5a.75.75 0 0 0-.417.501l-2 8a.75.75 0 0 0 .267.774l9 7a.75.75 0 0 0 .777.088l7.5-3.5a.75.75 0 0 0 .339-.316l2.5-4.5a.75.75 0 0 0-.008-.742l-3.5-6a.75.75 0 0 0-1.045-.258L13.72 9.478zm6.384 10.782a1 1 0 0 0-1-1.732l-.008.005a1 1 0 1 0 1 1.732zm-4.672-1.537a.75.75 0 0 1 .335 1.007l-1.5 3a.75.75 0 1 1-1.342-.671l1.5-3a.75.75 0 0 1 1.007-.336M7.264 9.3a.75.75 0 0 0-.935.366l-1 2a.75.75 0 0 0 1.342.67l.698-1.395 1.367.515a.75.75 0 1 0 .528-1.404zM17.55 1.4a.75.75 0 0 1 .45-.15h4.001a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.3.6l-2 1.5a.75.75 0 0 1-.632.128l-4-1A.75.75 0 0 1 15.25 5V3.5a.75.75 0 0 1 .3-.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Asteroid_01;
