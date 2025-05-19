import React from "react";
const BorderAll_01: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v16h16V4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 7V3h2v4zm0 4V9.3h2V11h1.7v2H13v1.7h-2V13H9.3v-2zm-4 2H3v-2h4zm14 0h-4v-2h4zm-10 8v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderAll_01;
