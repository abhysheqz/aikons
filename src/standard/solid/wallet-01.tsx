import React from "react";
const Wallet_01: React.FC<
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
        d="M17.25 5c0-.69-.56-1.25-1.25-1.25H5a1.25 1.25 0 1 0 0 2.5h12.25zm1.5 2a.75.75 0 0 1-.75.75H5a2.75 2.75 0 0 1 0-5.5h11A2.75 2.75 0 0 1 18.75 5z"
      />
      <path
        fill="currentColor"
        d="M15.838 2.25c1.608 0 2.912 1.231 2.912 2.75v1.25H19A2.75 2.75 0 0 1 21.75 9v2.25H18A1.75 1.75 0 0 0 16.25 13v2c0 .966.784 1.75 1.75 1.75h3.75V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5c0-1.519 1.304-2.75 2.912-2.75zm5.912 13H18a.25.25 0 0 1-.25-.25v-2a.25.25 0 0 1 .25-.25h3.75zM5.274 4.082a1.084 1.084 0 0 0 .001 2.167H16.81v-1.25c0-.506-.435-.917-.971-.917z"
      />
    </svg>
  );
};
export default Wallet_01;
