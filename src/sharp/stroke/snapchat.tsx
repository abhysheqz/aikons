import React from "react";
const Snapchat: React.FC<
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
        d="M2.034 16.487c3.812-2.223 3.812-4.857.953-8.006M21.974 16.487c-3.812-2.223-3.812-4.857-.953-8.006"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.662 6.412c-.203 5.24.309 7.725-4.643 10.02-.023.01-.024.055 0 .055 2.894.345 3.22 2.662 3.348 3.284 2.675-.123 5.414 1.323 6.664 2.229 1.508-1.346 4.872-2.355 6.625-2.277.317-1.644 1.15-3.003 3.299-3.24.03 0 .058-.074.035-.07-3.954-1.322-4.509-4.396-4.53-7.264-.009-1.247.037-2.526-.437-3.679-.805-1.96-2.523-3.542-5.012-3.467-3.84.115-5.13 3.086-5.349 4.409Z"
      />
    </svg>
  );
};
export default Snapchat;
