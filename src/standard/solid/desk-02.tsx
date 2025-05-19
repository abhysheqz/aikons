import React from "react";
const Desk_02: React.FC<
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
        d="M1 4a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2v15a1 1 0 1 1-2 0v-3h-4a3 3 0 0 1-3-3V9H4v11a1 1 0 1 1-2 0V5a1 1 0 0 1-1-1m14 5v2h5V9zm5 4h-5v1a1 1 0 0 0 1 1h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Desk_02;
