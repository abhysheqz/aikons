import React from "react";
const Flow: React.FC<
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
        d="M13.112 5.5A4.502 4.502 0 0 1 22 6.5a4.5 4.5 0 0 1-3.5 4.389V13.5h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1H10v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h3.5v-1a2 2 0 0 1 2-2h1v-2.611A4.51 4.51 0 0 1 13.111 7.5H10v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flow;
