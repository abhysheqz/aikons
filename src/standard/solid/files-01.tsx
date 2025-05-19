import React from "react";
const Files_01: React.FC<
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
        d="M5.75 4A2.75 2.75 0 0 1 8.5 1.25h7a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v10a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 5.75 17zm14 3.31-4.56-4.56v3.06a1.5 1.5 0 0 0 1.5 1.5zM10 10.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.5 4.437A2.75 2.75 0 0 0 2.75 7v13a2.75 2.75 0 0 0 2.75 2.75h10A2.75 2.75 0 0 0 18.063 21H8.5a4 4 0 0 1-4-4z"
      />
    </svg>
  );
};
export default Files_01;
