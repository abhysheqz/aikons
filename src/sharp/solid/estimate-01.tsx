import React from "react";
const Estimate_01: React.FC<
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
        d="M18.25 10.25h-1.5v2h-3v6.5h-12V1.25h16.5zm-13.5-5h10.5v1.5H4.75zm2.5 4h-2.5v1.5h2.5zm1.5 0h2.5v1.5h-2.5zm6.5 0h-2.5v1.5h2.5zm-10.5 4h2.5v1.5h-2.5zm6.5 0h-2.5v1.5h2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 11.25v2h3v1.5h-6v1.5h6v4.5h-3v2h-1.5v-2h-3v-1.5h6v-1.5h-6v-4.5h3v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Estimate_01;
