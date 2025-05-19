import React from "react";
const Building_04: React.FC<
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
        d="M15 2a.75.75 0 0 0-.75-.75h-2.467V18a.75.75 0 0 1-.75.75H2.3l-1.3 4h14z"
      />
      <path
        fill="currentColor"
        d="m2.787 17.25 1.463-4.5h6.033v4.5zM4.737 11.25l3.25-10h2.296v10z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.249 9.949V22.75H23V12.48zm1.875 6.301h3v-1.5h-3zm0 3h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_04;
