import React from "react";
const NotificationOff_02: React.FC<
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
        d="M8.217 20A4.29 4.29 0 0 0 12 22.25 4.29 4.29 0 0 0 15.782 20zM5.597 5.597A7.2 7.2 0 0 0 4.75 9v5.307c0 1.32-.803 2.507-2.029 2.997A.75.75 0 0 0 3 18.75h15.75zM19.25 14.51V9A7.25 7.25 0 0 0 7.146 3.615l12.577 12.577a3.2 3.2 0 0 1-.473-1.682"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 0 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationOff_02;
