import React from "react";
const HospitalLocation: React.FC<
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
        d="M12 2c-4.418 0-8 3.618-8 8.08 0 4.783 4.354 7.224 7.086 10.628.46.574 1.39.588 1.86.023C15.726 17.39 20 14.772 20 10.081 20 5.618 16.418 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 7.5V10m0 2.5V10m4-2.5V10m0 2.5V10m0 0h-4"
      />
    </svg>
  );
};
export default HospitalLocation;
