import React from "react";
const VolumeMinus: React.FC<
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
        strokeWidth={1.5}
        d="M16.998 12.002h5M2.07 15.515 7 15.488l6.95 4.504c.066.043.042-.048.042-.128V4.14c0-.08.024-.171-.043-.128L7 8.516 2.07 8.488c-.055 0-.07.043-.07.098v6.8309999999999995c0 .055.015.098.07.098Z"
      />
    </svg>
  );
};
export default VolumeMinus;
