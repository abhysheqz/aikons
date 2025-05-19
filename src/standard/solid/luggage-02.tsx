import React from "react";
const Luggage_02: React.FC<
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
        d="M8 1.75A.75.75 0 0 1 8.75 1h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 1.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.75 1a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 9.75 1m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M7.5 20.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75zM14 20.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 9.75A2.75 2.75 0 0 1 7.75 7h8a2.75 2.75 0 0 1 2.75 2.75v8.5A2.75 2.75 0 0 1 15.75 21h-8A2.75 2.75 0 0 1 5 18.25zm4.75.25a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75m4.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Luggage_02;
