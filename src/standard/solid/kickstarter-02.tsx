import React from "react";
const Kickstarter_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM7 7.336l.002 9.33c0 .736.56 1.332 1.25 1.332h1.25c.69 0 1.249-.596 1.249-1.333v-2.753a.2.2 0 0 1 .357-.124l2.85 3.634c.386.6 1.153.758 1.722.354l.764-.543c.567-.404.726-1.219.357-1.83l-2.614-3.404L16.8 8.598c.37-.612.21-1.427-.357-1.83l-.764-.544c-.569-.404-1.336-.247-1.723.354l-2.849 3.632a.2.2 0 0 1-.357-.123V7.336c0-.736-.56-1.333-1.25-1.333H8.25C7.56 6.003 7 6.6 7 7.336"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kickstarter_02;
