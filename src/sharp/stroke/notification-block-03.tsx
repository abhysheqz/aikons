import React from "react";
const NotificationBlock_03: React.FC<
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
        strokeWidth={1.5}
        d="m20.45 5.049-4.9 4.9m-1.05-2.45a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 20.999c.795.622 1.847 1 3 1 1.152 0 2.203-.378 3-1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.493 2.412a7.5 7.5 0 0 0-2.456-.411 7.5 7.5 0 0 0-7.501 7.496v2.911l-1.995 3.445a.096.096 0 0 0 .015.12c2.903 2.733 12.54 5.162 18.878-.02a.1.1 0 0 0 .024-.126l-1.328-2.365"
      />
    </svg>
  );
};
export default NotificationBlock_03;
