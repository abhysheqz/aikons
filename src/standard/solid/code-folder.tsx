import React from "react";
const CodeFolder: React.FC<
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
        d="m10.199 3.342 2.192 2.902H20a2.75 2.75 0 0 1 2.75 2.75V19A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V5A2.75 2.75 0 0 1 4 2.25h4.004A2.75 2.75 0 0 1 10.2 3.342m3.497 7.937a.75.75 0 0 0-1.392-.557l-2 5a.75.75 0 0 0 1.392.557zM9.03 12.53a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-.97-.97zm7-1.06a.75.75 0 1 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CodeFolder;
