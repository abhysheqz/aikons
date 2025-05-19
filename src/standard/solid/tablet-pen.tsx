import React from "react";
const TabletPen: React.FC<
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
        d="M22.75 19V5A2.75 2.75 0 0 0 20 2.25H4A2.75 2.75 0 0 0 1.25 5v14A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19M6.247 4.247h13.507a1 1 0 0 1 1 1v13.506a1 1 0 0 1-1 1H6.242z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.5 7.75a.75.75 0 0 1 .53.22l2.5 2.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-.53.22H11a.75.75 0 0 1-.75-.75V13a.75.75 0 0 1 .22-.53l4.5-4.5a.75.75 0 0 1 .53-.22"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TabletPen;
