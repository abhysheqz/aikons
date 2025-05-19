import React from "react";
const NoteAdd: React.FC<
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
        d="M18 13a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H19V21a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2H17V14a1 1 0 0 1 1-1M6 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 5.5A2.75 2.75 0 0 1 4.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75v7.409A2.5 2.5 0 0 0 15.5 14v1h-1a2.5 2.5 0 0 0 0 5h1v1c0 .681.273 1.3.715 1.75H4.5A2.75 2.75 0 0 1 1.75 20zM7.5 9.25a.75.75 0 0 0 0 1.5h6.258a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h2.258a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteAdd;
