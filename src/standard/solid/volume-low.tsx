import React from "react";
const VolumeLow: React.FC<
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
        d="M16.36 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.156.63L8.78 16.25H6a2.75 2.75 0 0 1-2.75-2.75v-3A2.75 2.75 0 0 1 6 7.75h2.78l6.814-4.38a.75.75 0 0 1 .765-.028M18.393 8.205a1 1 0 0 1 1.402.188A5.93 5.93 0 0 1 21 12a5.93 5.93 0 0 1-1.205 3.607 1 1 0 0 1-1.59-1.214A3.93 3.93 0 0 0 19 12c0-.915-.301-1.746-.795-2.393a1 1 0 0 1 .188-1.402"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VolumeLow;
