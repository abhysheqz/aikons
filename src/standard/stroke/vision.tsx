import React from "react";
const Vision: React.FC<
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
        strokeWidth={1.5}
        d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7c5.334 0 8 5 8 5s-2.666 5-8 5-8-5-8-5 2.667-5 8-5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 2.5H4.5a2 2 0 0 0-2 2V8M16 2.5h3.5a2 2 0 0 1 2 2V8M16 21.5h3.5a2 2 0 0 0 2-2V16M8 21.5H4.5a2 2 0 0 1-2-2V16"
      />
    </svg>
  );
};
export default Vision;
