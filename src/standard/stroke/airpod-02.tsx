import React from "react";
const Airpod_02: React.FC<
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
        d="M18.5 2.5h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 7h19M7 7v1.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7"
      />
    </svg>
  );
};
export default Airpod_02;
