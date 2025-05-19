import React from "react";
const VolumeMute_02: React.FC<
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
        d="m17 9.5 5 5m-5 0 5-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.072 15.514 4.93-.028 6.95 4.504c.066.044.042-.048.042-.127V4.137c0-.08.024-.17-.043-.127l-6.95 4.504-4.929-.028c-.055 0-.07.043-.07.098v6.832c0 .055.015.098.07.098Z"
      />
    </svg>
  );
};
export default VolumeMute_02;
