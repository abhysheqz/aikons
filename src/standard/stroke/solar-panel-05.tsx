import React from "react";
const SolarPanel_05: React.FC<
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
        d="M16.765 11h-9.53a1 1 0 0 0-.954.702l-1.875 6A1 1 0 0 0 5.36 19h13.28a1 1 0 0 0 .954-1.298l-1.875-6a1 1 0 0 0-.954-.702Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11v8m7-4H5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 19v3m0 0h2m-2 0h-2M9 8a3 3 0 1 1 6 0m-3-5.5V2m5.5 6h.5M6 8h.5M16 4l.5-.5m-9 0L8 4"
      />
    </svg>
  );
};
export default SolarPanel_05;
