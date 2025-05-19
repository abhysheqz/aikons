import React from "react";
const Sujood: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.502 12.51c0-1.483-.889-3.946-4.444-5.924-4.444-2.473-7.741-1.723-8.888 0-.987 1.483-1.481 3.462 2.963 8.408H5.502v3.997h6m8-6.48c-.5.323-2 1.871-4 1.484l1 2.498c.667.167 2.1 1.3 2.5 2.499l-4.5.008-3.01-5.273c-.547-.957-.214-2.18.812-2.584L15.002 10m4.5 2.51h.258a2.742 2.742 0 1 1 0 5.482h-1.258"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.502 15.5H2.5l.002 3.5"
      />
    </svg>
  );
};
export default Sujood;
