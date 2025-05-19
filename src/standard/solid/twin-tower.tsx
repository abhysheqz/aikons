import React from "react";
const TwinTower: React.FC<
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
        d="M8.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-2.25l2.85 3.8a.75.75 0 1 1-1.2.9l-2.4-3.2-2.4 3.2a.75.75 0 1 1-1.2-.9l2.85-3.8H9a.75.75 0 0 1-.75-.75M5.5 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M18.5 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 7.25A1.75 1.75 0 0 0 2.25 9v1.146q.36-.095.75-.096h5q.39 0 .75.096V9A1.75 1.75 0 0 0 7 7.25zM17 7.25A1.75 1.75 0 0 0 15.25 9v1.146q.36-.095.75-.096h5q.39 0 .75.096V9A1.75 1.75 0 0 0 20 7.25zM5 3.25A1.75 1.75 0 0 0 3.25 5v1.146q.36-.095.75-.096h3q.39 0 .75.096V5A1.75 1.75 0 0 0 6 3.25zM18 3.25A1.75 1.75 0 0 0 16.25 5v1.146q.36-.095.75-.096h3q.39 0 .75.096V5A1.75 1.75 0 0 0 19 3.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 11.25A1.75 1.75 0 0 0 1.25 13v9c0 .414.336.75.75.75h2.75V20a.75.75 0 0 1 1.5 0v2.75H9a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 8 11.25zM16 11.25A1.75 1.75 0 0 0 14.25 13v9c0 .414.336.75.75.75h2.75V20a.75.75 0 0 1 1.5 0v2.75H22a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 21 11.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TwinTower;
