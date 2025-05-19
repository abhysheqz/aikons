import React from "react";
const Transmission: React.FC<
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
        d="M3.5 15a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9zm0 3.2A3.8 3.8 0 0 1 7.3 22h2a5.8 5.8 0 0 0-5.8-5.8zm0 3.2a.6.6 0 0 1 .6.6h2a2.6 2.6 0 0 0-2.6-2.6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-5v-2h4V3h-13v8h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Transmission;
