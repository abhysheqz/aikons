import React from "react";
const Inbox: React.FC<
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
        d="M1.75 4.5A2.75 2.75 0 0 1 4.5 1.75h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zm18.5 7.75v-7.5a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v7.5H8.5a.75.75 0 0 1 .75.75v.5a2.75 2.75 0 0 0 5.5 0V13a.75.75 0 0 1 .75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Inbox;
