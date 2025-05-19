import React from "react";
const Link_03: React.FC<
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
        d="M15.707 8.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.793 10.793a2.414 2.414 0 0 1 3.414 0 1 1 0 1 1-1.414 1.414.414.414 0 0 0-.586 0L3.62 15.793a1 1 0 0 0 0 1.414l3.172 3.172a1 1 0 0 0 1.414 0l3.586-3.586a.414.414 0 0 0 0-.586 1 1 0 1 1 1.414-1.414 2.414 2.414 0 0 1 0 3.414L9.62 21.793a3 3 0 0 1-4.243 0l-3.171-3.171a3 3 0 0 1 0-4.243zM14.379 2.207a3 3 0 0 1 4.243 0l3.171 3.171a3 3 0 0 1 0 4.243l-3.586 3.586a2.414 2.414 0 0 1-3.414 0 1 1 0 0 1 1.414-1.414.414.414 0 0 0 .586 0l3.586-3.586a1 1 0 0 0 0-1.414L17.207 3.62a1 1 0 0 0-1.414 0l-3.586 3.586a.414.414 0 0 0 0 .586 1 1 0 0 1-1.414 1.414 2.414 2.414 0 0 1 0-3.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_03;
