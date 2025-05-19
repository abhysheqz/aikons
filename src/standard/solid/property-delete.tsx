import React from "react";
const PropertyDelete: React.FC<
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
        d="M15.293 15.293a1 1 0 0 1 1.414 0L19 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414L20.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414L19 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 19l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 1.25A3.75 3.75 0 0 0 1.25 5v1.25h20.5V5A3.75 3.75 0 0 0 18 1.25zm16.75 6.5H1.25V18A3.75 3.75 0 0 0 5 21.75h8.513a2.5 2.5 0 0 1 .72-1.518L15.463 19l-1.232-1.232a2.5 2.5 0 0 1 3.536-3.536L19 15.465l1.232-1.233a2.5 2.5 0 0 1 1.518-.72zM6 10.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyDelete;
