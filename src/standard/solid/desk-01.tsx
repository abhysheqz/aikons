import React from "react";
const Desk_01: React.FC<
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
        d="M2 3a1 1 0 0 0 0 2v15a1 1 0 1 0 2 0V9h17a1 1 0 0 0 1-1V5a1 1 0 1 0 0-2zm11 7.501V13.8h9v-3.507a2.5 2.5 0 0 1-1 .208zm0 9.5V15.3h9V20a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Desk_01;
