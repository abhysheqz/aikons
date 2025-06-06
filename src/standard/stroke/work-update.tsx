import React from "react";
const WorkUpdate: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 10V7.5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 5.5-.793-2.775A1 1 0 0 0 13.746 2H9.254a1 1 0 0 0-.961.725L7.5 5.5"
      />
      <path
        fill="currentColor"
        d="m17 19-.53.53a.75.75 0 0 0 1.06 0zm2.03-.97a.75.75 0 1 0-1.06-1.06zm-3-1.06a.75.75 0 1 0-1.06 1.06zM17.75 15a.75.75 0 0 0-1.5 0zm3.5 2A4.25 4.25 0 0 1 17 21.25v1.5A5.75 5.75 0 0 0 22.75 17zM17 21.25A4.25 4.25 0 0 1 12.75 17h-1.5A5.75 5.75 0 0 0 17 22.75zM12.75 17A4.25 4.25 0 0 1 17 12.75v-1.5A5.75 5.75 0 0 0 11.25 17zM17 12.75A4.25 4.25 0 0 1 21.25 17h1.5A5.75 5.75 0 0 0 17 11.25zm.53 6.78 1.5-1.5-1.06-1.06-1.5 1.5zm0-1.06-1.5-1.5-1.06 1.06 1.5 1.5zm.22.53v-4h-1.5v4z"
      />
    </svg>
  );
};
export default WorkUpdate;
