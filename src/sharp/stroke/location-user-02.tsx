import React from "react";
const LocationUser_02: React.FC<
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
        d="M19 19.025c0 1.66-3.134 3.005-7 3.005s-7-1.345-7-3.005"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 7.116c3.037 0 5.15 2.486 4.999 5.45v1.366H14.93l-1.24 5.12h-3.384l-1.222-5.12H7.018v-1.803C7.13 9.225 9.085 7.245 12 7.116Zm0 0c1.518 0 2.509-1.266 2.509-2.662 0-1.207-1.044-2.427-2.51-2.427-1.464 0-2.495 1.173-2.495 2.51s.977 2.58 2.496 2.58Z"
      />
    </svg>
  );
};
export default LocationUser_02;
