import React from "react";
const LocationUser_04: React.FC<
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
        d="m18 16.992 2 4.998H4l2-4.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.988 7.074c3.038 0 5.15 2.484 5 5.447v1.365H14.92l-1.24 5.118h-3.384l-1.222-5.118H7.006v-1.802c.113-2.902 2.068-4.882 4.982-5.01Zm0 0c1.519 0 2.51-1.266 2.51-2.661 0-1.207-1.045-2.426-2.51-2.426S9.493 3.16 9.493 4.495s.976 2.579 2.495 2.579Z"
      />
    </svg>
  );
};
export default LocationUser_04;
