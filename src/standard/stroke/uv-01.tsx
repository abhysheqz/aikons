import React from "react";
const Uv_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.57 11.593 6.5 9.5l-.69-3.095a.5.5 0 0 1 .597-.597L9.5 6.5l2.095-2.93a.5.5 0 0 1 .814 0L14.5 6.5l3.097-.692a.5.5 0 0 1 .597.597L17.5 9.5l2.93 2.093a.5.5 0 0 1 0 .814L17.5 14.5l.694 3.095a.5.5 0 0 1-.597.597L14.5 17.5l-2.091 2.93a.5.5 0 0 1-.814 0L9.5 17.5l-3.093.692a.5.5 0 0 1-.597-.597L6.5 14.5l-2.93-2.093a.5.5 0 0 1 0-.814Z"
      />
    </svg>
  );
};
export default Uv_01;
