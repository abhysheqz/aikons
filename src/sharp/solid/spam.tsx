import React from "react";
const Spam: React.FC<
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
        d="M6.085 2.25h11.83L22.75 12l-4.835 9.75H6.085L1.25 12zm5.163 13h1.509v1.5h-1.509zM12.75 14V7h-1.5v7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spam;
