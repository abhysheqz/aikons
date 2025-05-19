import React from "react";
const Feather: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.686 17c1.635 0 2.453 0 3.188-.305.735-.304 1.313-.882 2.47-2.038l4.414-4.414a4.243 4.243 0 1 0-6-6L9.343 8.657c-1.156 1.156-1.734 1.734-2.038 2.47C7 11.86 7 12.678 7 14.313V17zM3 21 15 9M12 12h2.5"
      />
    </svg>
  );
};
export default Feather;
