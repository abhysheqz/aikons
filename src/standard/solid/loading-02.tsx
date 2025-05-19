import React from "react";
const Loading_02: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 .927-.117 1.828-.339 2.687a.75.75 0 0 1-.936.533l-2.883-.84a.75.75 0 0 1-.519-.897q.175-.714.177-1.483a6.25 6.25 0 1 0-3.03 5.358.75.75 0 0 1 .868.066l2.394 2a.75.75 0 0 1-.03 1.176A10.7 10.7 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Loading_02;
