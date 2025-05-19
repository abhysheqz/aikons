import React from "react";
const Belt: React.FC<
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
        fill="#fff"
        fillRule="evenodd"
        d="M18.75 12a1 1 0 1 1 1 1 1 1 0 0 1-1-1M3.11 12a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 7.5a.75.75 0 0 1 .75-.75h3.684a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H1.75A.75.75 0 0 1 1 16.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.957 12a1 1 0 0 1 1-1H9.11a1 1 0 1 1 0 2H5.957a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a5 5 0 0 0 0-10zm-3 1a3 3 0 0 1 3-3h2a7 7 0 1 1 0 14h-2a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.166 7.206a.75.75 0 0 1 .69-.456h7.894a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-7.895a.75.75 0 0 1-.539-1.271c.638-.66 1.416-1.872 1.64-3.302.218-1.387-.076-3.026-1.642-4.658a.75.75 0 0 1-.149-.813"
      />
    </svg>
  );
};
export default Belt;
