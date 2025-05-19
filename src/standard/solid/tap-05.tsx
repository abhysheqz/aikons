import React from "react";
const Tap_05: React.FC<
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
        d="M10 3.5a3 3 0 0 0-3 3 1 1 0 0 1-2 0 5 5 0 0 1 10 0 1 1 0 1 1-2 0 3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.502 10.5H11.5v-4a1.5 1.5 0 0 0-3 0v8l-1.537-1.488c-.642-.543-1.648-.454-2.169.191a1.29 1.29 0 0 0-.024 1.61L8.5 20v1a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-1l.854-1.2c.42-.52.646-1.15.646-1.8v-2.5c0-1.054-.877-1.917-1.99-1.994q.05.205.05.426v1.696a.375.375 0 0 1-.75 0v-1.696c0-.596-.528-1.125-1.24-1.125h-.705q.003.062.004.125v2.196a.375.375 0 0 1-.75 0v-2.196c0-.596-.529-1.125-1.24-1.125h-.538a.4.4 0 0 1-.089-.01v3.33a.375.375 0 0 1-.75 0z"
      />
    </svg>
  );
};
export default Tap_05;
