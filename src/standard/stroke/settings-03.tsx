import React from "react";
const Settings_03: React.FC<
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
        strokeWidth={1.5}
        d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.292 20.007 4.41-7.5a1 1 0 0 0 0-1.014l-4.41-7.5a1 1 0 0 0-.862-.493H7.572a1 1 0 0 0-.862.493l-4.412 7.5a1 1 0 0 0 0 1.014l4.412 7.5a1 1 0 0 0 .862.493h8.858a1 1 0 0 0 .862-.493Z"
      />
    </svg>
  );
};
export default Settings_03;
