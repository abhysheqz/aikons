import React from "react";
const Briefcase_09: React.FC<
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
        d="M2.5 5.25a.75.75 0 0 0-.75.75v5.25h20.5V6a.75.75 0 0 0-.75-.75zM22.25 12.75h-4.5v9.5h3.75a.75.75 0 0 0 .75-.75zM16.25 22.25v-9.5h-8.5v9.5zM6.25 22.25v-9.5h-4.5v8.75c0 .414.336.75.75.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Briefcase_09;
