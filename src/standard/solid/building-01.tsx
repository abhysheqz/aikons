import React from "react";
const Building_01: React.FC<
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
        d="M6 1a1 1 0 0 0-1 1v19H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-3.25h-5a.75.75 0 0 1 0-1.5h5v-2.5h-5a.75.75 0 0 1 0-1.5h5V11q0-.643-.08-1.265a1 1 0 0 1-.15.015H14a.75.75 0 0 1 0-1.5h4.617C17.422 4.064 13.57 1 9 1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_01;
