import React from "react";
const PointingRight_06: React.FC<
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
        d="M14.246 19.994h-2.749a.45.45 0 1 1 0-.9h2.784c.59-.505.965-1.255.965-2.092v-.468h-2.749a.45.45 0 1 1 0-.9h3.213a2.74 2.74 0 0 0 .536-1.632v-.25c.004-.154-.042-.498-.261-.645h-2.488a.45.45 0 0 1 0-.9h7.913a1.337 1.337 0 1 0 0-2.675H10.497a.45.45 0 0 1 0-.9h4.298l-1.775-2.03a3.96 3.96 0 0 0-5.309-.594L3.252 9.252H1.996a.75.75 0 0 0-.75.75v10c0 .413.336.75.75.75h1.237l1.2.958a4.75 4.75 0 0 0 2.966 1.041h4.097a2.75 2.75 0 0 0 2.75-2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.118 1.076a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 18.5 7V5.5H16a1 1 0 1 1 0-2h2.5V2a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_06;
