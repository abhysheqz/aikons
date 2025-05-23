import React from "react";
const PointingLeft_07: React.FC<
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
        d="M12.355 16H10.5A1.5 1.5 0 0 1 9 14.5V13m4 6h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.266M9 13h2.421M9 13H4a1.5 1.5 0 0 1 0-3h10l-2.163-2.308a1.683 1.683 0 0 1 2.26-2.423l6.48 4.14a2 2 0 0 1 .923 1.685v7.906a3 3 0 0 1-3 3h-6a1.5 1.5 0 0 1-1.5-1.5v-1.176M2.5 4.5 5 2M2.5 4.5 5 7M2.5 4.5h6"
      />
    </svg>
  );
};
export default PointingLeft_07;
