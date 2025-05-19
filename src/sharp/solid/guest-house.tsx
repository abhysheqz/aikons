import React from "react";
const GuestHouse: React.FC<
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
        d="M10 20.75h4v2h-4zM12.278 1.304a.75.75 0 0 0-.557 0l-10.221 4 .557 1.392L3.25 6.23v13.52h6V12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v7.75h6V6.23l1.193.466.557-1.392-1.75-.685V3h-1.5v1.032zm.972 18.446h-2.5v-7h2.5zM13.012 7H11v2h2.012z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GuestHouse;
