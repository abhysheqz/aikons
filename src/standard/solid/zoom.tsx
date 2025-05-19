import React from "react";
const Zoom: React.FC<
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
        fillRule="evenodd"
        d="M1.25 6A.75.75 0 0 1 2 5.25h8.995A4.756 4.756 0 0 1 15.75 10v8a.75.75 0 0 1-.75.75H5.998A4.75 4.75 0 0 1 1.25 14zM22.333 6.33a.75.75 0 0 1 .414.67v10a.75.75 0 0 1-1.2.6l-3.997-3a.75.75 0 0 1-.3-.6v-4a.75.75 0 0 1 .3-.6l3.997-3a.75.75 0 0 1 .786-.07"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zoom;
