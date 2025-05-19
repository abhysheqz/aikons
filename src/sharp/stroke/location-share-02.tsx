import React from "react";
const LocationShare_02: React.FC<
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
        d="M21.168 6.5a10.03 10.03 0 0 1 0 8m-18.336 0a10.03 10.03 0 0 1 0-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3c-3.866 0-7 3.256-7 7.273 0 2.296.875 4.082 2.625 5.677C8.858 17.074 11.103 19.486 12 21c.943-1.484 3.142-3.926 4.375-5.05C18.125 14.355 19 12.57 19 10.273 19 6.256 15.866 3 12 3Z"
      />
    </svg>
  );
};
export default LocationShare_02;
