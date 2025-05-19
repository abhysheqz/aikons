import React from "react";
const Oven: React.FC<
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
        d="M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 4A2.75 2.75 0 0 1 5 1.25h14A2.75 2.75 0 0 1 21.75 4v3.25H2.25zm0 4.75h19.5V22a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM6 3.367a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5zm11 .752a1 1 0 1 1 1 1 1 1 0 0 1-1-1M7.185 11c-.93 0-1.685.66-1.685 1.474v5.052C5.5 18.34 6.254 19 7.185 19h9.63c.93 0 1.685-.66 1.685-1.474v-5.052c0-.814-.755-1.474-1.685-1.474z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Oven;
