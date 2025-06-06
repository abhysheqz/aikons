import React from "react";
const InboxCheck: React.FC<
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
        d="M16.93 5.47a.75.75 0 1 0-1.06 1.06zm.67 1.73-.53.53a.75.75 0 0 0 1.106-.05zm2.576-1.92a.75.75 0 0 0-1.152-.96zM22.75 6A4.75 4.75 0 0 0 18 1.25v1.5A3.25 3.25 0 0 1 21.25 6zM18 1.25A4.75 4.75 0 0 0 13.25 6h1.5A3.25 3.25 0 0 1 18 2.75zM13.25 6A4.75 4.75 0 0 0 18 10.75v-1.5A3.25 3.25 0 0 1 14.75 6zM18 10.75A4.75 4.75 0 0 0 22.75 6h-1.5A3.25 3.25 0 0 1 18 9.25zm-2.13-4.22 1.2 1.2 1.06-1.06-1.2-1.2zm2.306 1.15 2-2.4-1.152-.96-2 2.4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 3H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 14h6v.5a3.5 3.5 0 1 0 7 0V14h6"
      />
    </svg>
  );
};
export default InboxCheck;
