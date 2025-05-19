import React from "react";
const Tree_02: React.FC<
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
        d="M11.25 17.75v3.5H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c-3.239 0-5.455 2.386-5.722 5.262A5.752 5.752 0 0 0 8 17.75h3.25v-4.44l-2.28-2.28a.75.75 0 1 1 1.06-1.06l1.22 1.22V9a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.28 2.28v2.44H16a5.75 5.75 0 0 0 1.722-11.238C17.455 3.636 15.238 1.25 12 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_02;
