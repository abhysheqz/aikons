import React from "react";
const AnalyticsUp: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm5.5 13v2h-1.5v-2zm5 2v-3h-1.5v3zm5-5v5h-1.5v-5zM13.5 7.75h1.8c-.373.347-.844.74-1.414 1.133C12.176 10.062 9.573 11.25 6 11.25v1.5c3.927 0 6.823-1.312 8.738-2.633.6-.413 1.102-.827 1.511-1.202V10.5h1.5V6.25H13.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AnalyticsUp;
