import React from "react";
const VolumeUp: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 12h5m-2.5 2.5v-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.072 15.513 4.93-.027 6.95 4.504c.066.044.042-.048.042-.128V4.136c0-.079.024-.17-.043-.127l-6.95 4.505-4.929-.028c-.055 0-.07.043-.07.098v6.831c0 .055.015.098.07.098Z"
      />
    </svg>
  );
};
export default VolumeUp;
