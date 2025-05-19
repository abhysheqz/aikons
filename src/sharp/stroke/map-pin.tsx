import React from "react";
const MapPin: React.FC<
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
        d="M17 9h5v13H2V9h5M6 12l4.5 2.625M18 19l-4.2-2.45m0 0 4.2-2.8m-4.2 2.8-3.3-1.925m0 0L6 17.6M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v4"
      />
    </svg>
  );
};
export default MapPin;
