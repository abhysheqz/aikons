import React from "react";
const AppStore: React.FC<
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
        d="M21 3v18H3V3zM10.5 6.5l1.303 1.838M17.5 17.5 13.4 11M13.5 6.5l-7 11M6.5 14h6m5 0h-2"
      />
    </svg>
  );
};
export default AppStore;
