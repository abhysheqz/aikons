import React from "react";
const BorderRight_02: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h4v2H4v3H2zm7-1h6v2H9zm8 0h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-4v-2h3V4h-3zM2 15V9h2v6zm0 6v-4h2v3h3v2H3a1 1 0 0 1-1-1m13 1H9v-2h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderRight_02;
