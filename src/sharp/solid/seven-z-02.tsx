import React from "react";
const SevenZ_02: React.FC<
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
        d="M10.25 14.75v-1.5h4.5v1.41l-2.116 5.09H11.01l2.058-5zM20.75 18.25v1.5h-4.5v-1.5l2.625-3.5H16.25v-1.5h4.5v1.5l-2.625 3.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5h17.5V21H9.144l2.058-5H9v-4h11.75V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SevenZ_02;
