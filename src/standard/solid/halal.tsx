import React from "react";
const Halal: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.62 1.956a1.75 1.75 0 0 0-2.241 0L9.228 3.75H5.999A1.75 1.75 0 0 0 4.25 5.5v3.229l-1.793 2.15a1.75 1.75 0 0 0 0 2.241l1.793 2.152v3.228c0 .967.784 1.75 1.75 1.75h3.229l2.15 1.793a1.75 1.75 0 0 0 2.241 0l2.152-1.793h3.228a1.75 1.75 0 0 0 1.75-1.75v-3.228l1.793-2.152a1.75 1.75 0 0 0 0-2.24l-1.793-2.151V5.499A1.75 1.75 0 0 0 19 3.75h-3.228zm1.109 7.04a.75.75 0 0 0-1.5.008l.01 1.674-.709-.708a.75.75 0 1 0-1.06 1.06l1.78 1.78V14a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5H13a1.75 1.75 0 0 0 1.732-1.5h2.885a1.25 1.25 0 0 0 1.072-1.893l-1.046-1.743a.75.75 0 1 0-1.286.772l.818 1.364H14.75v-.25zm-4.49.003a.75.75 0 1 0-1.5.002L8.747 14a.25.25 0 0 1-.25.25H7.5a.75.75 0 0 0 0 1.5h.998a1.75 1.75 0 0 0 1.75-1.754z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Halal;
