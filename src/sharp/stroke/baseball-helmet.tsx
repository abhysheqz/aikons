import React from "react";
const BaseballHelmet: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.457 18.525h-.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.44 8.539c-1.517-3.592-4.518-5.5-8.153-5.5-4.925 0-9.256 4.147-9.256 8.962-.27 3.365 2.033 7.33 4.958 9.02h6.476c1.003 0 2.124.144 2.867-.533 1.077-.982 1.724-3.243-.71-4.26-.414-.206-.914-.213-1.376-.213h-1.297c0-4.352 4.548-4.358 7.022-4.491l1.942-2.815.02-.022c.179-.148-.014-.148-.093-.148h-6.864"
      />
    </svg>
  );
};
export default BaseballHelmet;
