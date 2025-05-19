import React from "react";
const Cabinet_03: React.FC<
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
        d="M4.5 21.75v-3h2v3zm13 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 11.75H2.25V19c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM21 2.25H3a.75.75 0 0 0-.75.75v7.25h19.5V3a.75.75 0 0 0-.75-.75M14 16.5h-4V15h4zM10 7h4V5.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cabinet_03;
