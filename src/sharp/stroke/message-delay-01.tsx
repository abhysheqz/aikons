import React from "react";
const MessageDelay_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.433 14.835h8.892M7.433 9.9h3.952"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.313 6.442 1.976-1.974m2.47 1.48a3.95 3.95 0 0 1-3.952 3.95 3.95 3.95 0 0 1-3.952-3.95A3.95 3.95 0 0 1 17.807 2a3.95 3.95 0 0 1 3.953 3.949Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.71 3.005c-6.988.72-9.897 8.644-6.09 14.867l-1.584 3.923a.1.1 0 0 0 .127.13l4.255-1.574c1.793 1.212 7.862 1.565 10.592.213 2.55-1.262 5.216-3.271 4.895-9.065M9.71 3.005q.237-.014.48-.014m-.48.014L11.113 3l1.296-.009"
      />
    </svg>
  );
};
export default MessageDelay_01;
