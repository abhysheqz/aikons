import React from "react";
const CheckUnread_04: React.FC<
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
        d="m3.5 5 14 14M2.5 13.5 6 17l.733-.767M16.5 6l-3.907 4.093M7.5 13.5 11 17l2.198-2.302M21.5 6l-6.349 6.651"
      />
    </svg>
  );
};
export default CheckUnread_04;
