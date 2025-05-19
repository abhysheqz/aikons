import React from "react";
const CallEnd_02: React.FC<
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
        d="M16.713 4.594c1.48.39 2.51.885 3.446 1.49 1.384.896 1.978 2.51 1.815 4.068-.07.658-.6.973-1.215.802l-1.389-.384c-1.1-.305-1.65-.457-1.986-.86s-.375-.959-.454-2.07zm0 0c-2.997-.791-6.426-.792-9.426 0m0 0c-1.48.39-2.51.885-3.446 1.49-1.384.896-1.978 2.51-1.815 4.068.07.658.6.973 1.215.802l1.389-.384c1.1-.305 1.65-.457 1.986-.86s.375-.959.454-2.07z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 17.5c.492.506 1.8 2.5 2.5 2.5m2.5-2.5c-.492.506-1.8 2.5-2.5 2.5m0 0v-8"
      />
    </svg>
  );
};
export default CallEnd_02;
