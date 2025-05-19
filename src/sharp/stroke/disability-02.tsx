import React from "react";
const Disability_02: React.FC<
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
        d="M11.5 10 9 9l-1.5 3.5M14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM15.5 19.483A6.07 6.07 0 0 1 10.57 22c-3.353 0-6.07-2.705-6.07-6.042 0-.875.164-1.707.5-2.458M12.649 8 10.5 14H16l3.5 6"
      />
    </svg>
  );
};
export default Disability_02;
