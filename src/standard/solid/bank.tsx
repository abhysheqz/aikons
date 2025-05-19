import React from "react";
const Bank: React.FC<
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
        d="M21.5 19.45a.7.7 0 0 0-.7-.7H2.7a.7.7 0 0 0-.7.7v2.3c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM14 17.25h5.5v-6.005H14zM4 17.25h5.5v-6.005H4z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.386 1.094a.75.75 0 0 1 .728 0l9 5a.75.75 0 0 1 .386.656v2.295a.7.7 0 0 1-.7.7H2.7a.7.7 0 0 1-.7-.7V6.75a.75.75 0 0 1 .386-.656zm.36 4.656a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bank;
