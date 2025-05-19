import React from "react";
const VolumeHigh: React.FC<
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
        d="M16.749 12c0-.915-.301-1.746-.795-2.393l1.59-1.213A5.93 5.93 0 0 1 18.748 12a5.93 5.93 0 0 1-1.204 3.607l-1.59-1.213A3.93 3.93 0 0 0 16.748 12M20.75 12c0-1.621-.64-3.125-1.738-4.325l1.475-1.35C21.89 7.857 22.75 9.832 22.75 12s-.86 4.143-2.263 5.675l-1.475-1.35c1.098-1.2 1.738-2.704 1.738-4.325"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.359 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.155.63L6.78 16.25H2a.75.75 0 0 1-.75-.75v-7A.75.75 0 0 1 2 7.75h4.78l6.814-4.38a.75.75 0 0 1 .765-.028"
      />
    </svg>
  );
};
export default VolumeHigh;
