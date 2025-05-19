import React from "react";
const SettingError_04: React.FC<
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
        strokeWidth={1.5}
        d="M9.55 13a3.5 3.5 0 1 1 5.613-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 10.5-4.708-8.007A1 1 0 0 0 16.43 2H7.572a1 1 0 0 0-.862.493l-4.412 7.5a1 1 0 0 0 0 1.014l4.412 7.5a1 1 0 0 0 .862.493H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 14.998v2m.009 2H17m5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default SettingError_04;
