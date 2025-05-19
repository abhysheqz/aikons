import React from "react";
const PlayListMinus: React.FC<
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
        d="M22.25 20h-8v-2h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.233 2.25H2.5a.75.75 0 0 0-.75.75v3.25h4.303zM7.761 6.25h5.292l2.18-4H9.941zM16.941 2.25l-2.18 4h6.489V3a.75.75 0 0 0-.75-.75zM1.75 7.75h19.5v8.75h-8.5v5.25H2.5a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default PlayListMinus;
