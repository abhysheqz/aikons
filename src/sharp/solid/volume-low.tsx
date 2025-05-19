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
        d="M18.75 12c0-.915-.301-1.746-.795-2.393l1.59-1.213A5.93 5.93 0 0 1 20.75 12a5.93 5.93 0 0 1-1.205 3.607l-1.59-1.213A3.93 3.93 0 0 0 18.75 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.359 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.155.63L8.78 16.25H4a.75.75 0 0 1-.75-.75v-7A.75.75 0 0 1 4 7.75h4.78l6.814-4.38a.75.75 0 0 1 .765-.028"
      />
    </svg>
  );
};
export default VolumeLow;
