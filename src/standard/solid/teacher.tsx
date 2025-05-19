import React from "react";
const Teacher: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h16a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3h-8.5a1 1 0 1 1 0-2H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 7a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M2.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2 13.5a2 2 0 0 1 2-2h8.5a1 1 0 1 1 0 2H7.992L8 17v4a1 1 0 1 1-2 0v-3H4v3a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Teacher;
