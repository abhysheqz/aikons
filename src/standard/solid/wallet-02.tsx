import React from "react";
const Wallet_02: React.FC<
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
        d="M10.5 1.75a4.25 4.25 0 0 1 4.242 4H6.258a4.25 4.25 0 0 1 4.242-4"
      />
      <path
        fill="currentColor"
        d="M15.838 2.75c1.608 0 2.912 1.231 2.912 2.75v1.25H19a2.75 2.75 0 0 1 2.75 2.75v2.25H18a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h3.75v2.25A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14c0-1.519 1.304-2.75 2.912-2.75h1.216a5.2 5.2 0 0 0-.932 1.832h-.172a1.084 1.084 0 0 0 .001 2.167H16.81v-1.25c0-.506-.435-.917-.971-.917h-.284a5.2 5.2 0 0 0-.932-1.832z"
      />
      <path
        fill="currentColor"
        d="M21.75 15.75H18a.25.25 0 0 1-.25-.25v-2a.25.25 0 0 1 .25-.25h3.75z"
      />
    </svg>
  );
};
export default Wallet_02;
