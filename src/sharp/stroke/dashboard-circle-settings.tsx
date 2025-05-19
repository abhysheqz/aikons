import React from "react";
const DashboardCircleSettings: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.5 6.75a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0ZM21 17.25a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0ZM10.5 17.25a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0ZM17.25 3v1.34m0 0c.666 0 1.268.27 1.704.706M17.25 4.34c-.666 0-1.268.27-1.704.706M17.25 9.16V10.5m0-1.339c.666 0 1.268-.27 1.705-.706m-1.705.706c-.666 0-1.268-.27-1.705-.706M21 6.75h-1.34m0 0c0 .666-.27 1.269-.705 1.705m.706-1.705c0-.665-.27-1.268-.707-1.704M14.84 6.75H13.5m1.34 0c0-.665.27-1.268.706-1.704m-.707 1.704c0 .666.27 1.269.706 1.705m4.357-4.357-.948.948m-4.356 4.356.947-.947m4.357.947-.947-.947m-4.357-4.357.947.948"
      />
    </svg>
  );
};
export default DashboardCircleSettings;
