import React from "react";
const RadioactiveAlert: React.FC<
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
        d="M9.8 2.4a1 1 0 0 1-.2 1.4 4 4 0 1 0 4.799 0 1 1 0 1 1 1.202-1.6 6 6 0 1 1-7.201 0 1 1 0 0 1 1.4.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 12a4 4 0 1 0 3.2 6.4 1 1 0 0 1 1.6 1.2 6 6 0 1 1 0-7.201 1 1 0 0 1-1.6 1.202A4 4 0 0 0 17 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 12a4 4 0 0 0-3.2 1.6 1 1 0 0 1-1.6-1.2 6 6 0 1 1 0 7.202A1 1 0 0 1 3.8 18.4 4 4 0 1 0 7 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RadioactiveAlert;
