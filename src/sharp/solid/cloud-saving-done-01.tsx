import React from "react";
const CloudSavingDone_01: React.FC<
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
        d="M17.707 16.043 11 22.75l-2.707-2.707 1.414-1.414L11 19.922l5.293-5.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 7.365A5.752 5.752 0 0 0 7 18.75h.465l2.242-2.242L11 17.8l5.293-5.293 3.536 3.535-2.707 2.707h.378a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudSavingDone_01;
