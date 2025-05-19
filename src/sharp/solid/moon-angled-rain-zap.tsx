import React from "react";
const MoonAngledRainZap: React.FC<
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
        d="m8.9 15.229 1.72 1.02-1.182 1.99h3l-2.975 5.01-1.72-1.02 1.181-1.99h-3zM14.787 22.292l1.5-3 1.79.895-1.5 3zM13.287 19.292l-1.5 3 1.79.894 1.5-3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.959 8.58A5.3 5.3 0 0 0 4 10.593 5.75 5.75 0 0 0 1.25 15.5a5.75 5.75 0 0 0 2.81 4.942l4.317-7.269 4.299 2.553-.602 1.013h3l-.81 1.364.753.377.6-1.2 4.472 2.236-.69 1.38a5.252 5.252 0 0 0-1.152-10.093 6.25 6.25 0 0 0-6.525-6.047 5.4 5.4 0 0 0-.582-1.501A5.3 5.3 0 0 0 7.993.787.957.957 0 0 0 6.78 1.82a2.46 2.46 0 0 1-1.196 2.43 2.4 2.4 0 0 1-2.665-.168.957.957 0 0 0-1.508.527 5.35 5.35 0 0 0 .547 3.97m1.226-2.263c.052.45.194.898.434 1.315a3.38 3.38 0 0 0 2.367 1.661 6.27 6.27 0 0 1 3.86-4.162A3.45 3.45 0 0 0 8.583 3.18 4.34 4.34 0 0 1 6.548 5.9a4.3 4.3 0 0 1-3.363.418"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonAngledRainZap;
