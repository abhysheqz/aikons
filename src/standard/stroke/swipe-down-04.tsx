import React from "react";
const SwipeDown_04: React.FC<
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
        d="M17.5 8 15 5.5M17.5 8 20 5.5M17.5 8V2M7 15v-4m0 0V4.75a1.75 1.75 0 1 1 3.5 0V11H15a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8.584a2 2 0 0 1-1.676-.908l-1.92-2.95c-.872-1.327-.971-1.94-.987-2.612a3 3 0 0 1 .115-.895c.184-.646.66-1.19 1.614-2.28z"
      />
    </svg>
  );
};
export default SwipeDown_04;
