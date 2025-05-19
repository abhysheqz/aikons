import React from "react";
const WindPower: React.FC<
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
        d="M13.5 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21 10.5a9.176 9.176 0 0 0-3.928-7m-10.144 0A9.18 9.18 0 0 0 3 10.5M12 9.5V7M8.5 13l1.75-1m5.25 1-1.75-1M12 12.5V22M18 22H6M9.5 2l1 5h3l1-5zM5.5 17.83l3.83-3.366-1.5-2.598L3 13.5zM18.5 17.83l-3.83-3.366 1.5-2.598L21 13.5z"
      />
    </svg>
  );
};
export default WindPower;
