import React from "react";
const AdobeXd: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm3.9 3.95L9 10.75l2.85-3.8 1.2.9L9.936 12l3.112 4.15-1.2.9L9 13.25l-2.85 3.8-1.2-.9L8.062 12 4.949 7.85zm12.6 9.8v-9.5h-1.5v3H14.5a.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75zm-3.5-5h2v3.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AdobeXd;
