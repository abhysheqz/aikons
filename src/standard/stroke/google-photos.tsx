import React from "react";
const GooglePhotos: React.FC<
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
        d="M12 12a5 5 0 0 0 0-10zM7 17a5 5 0 0 0 5 5V12a5 5 0 0 0-5 5ZM12 12a5 5 0 0 0 10 0zM7 7a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z"
      />
    </svg>
  );
};
export default GooglePhotos;
