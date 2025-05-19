import React from "react";
const PropertyEdit: React.FC<
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
        d="M18.97 13.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.53.22H14a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .22-.53z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 1.25A3.75 3.75 0 0 0 1.25 5v1.25h20.5V5A3.75 3.75 0 0 0 18 1.25zm16.75 6.5H1.25V18A3.75 3.75 0 0 0 5 21.75h6.75V19.5c0-.597.237-1.169.659-1.591l5.5-5.5a2.25 2.25 0 0 1 3.182 0l.659.659zM6 10.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyEdit;
