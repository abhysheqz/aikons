import React from "react";
const ArrowLeft_03: React.FC<
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
        d="M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.707 8.707a1 1 0 0 0-1.414-1.414l-4 4A1 1 0 0 0 7 12c0 .282.117.537.305.72l3.988 3.987a1 1 0 0 0 1.414-1.414L10.414 13H20a1 1 0 1 0 0-2h-9.586z"
      />
    </svg>
  );
};
export default ArrowLeft_03;
