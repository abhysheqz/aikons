import React from "react";
const SwipeLeft_04: React.FC<
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
        d="M6.5 15v-4m0 0V4.75a1.75 1.75 0 1 1 3.5 0V11h4.5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8.084a2 2 0 0 1-1.676-.908l-1.92-2.95c-.872-1.327-.971-1.94-.987-2.612a3 3 0 0 1 .115-.895c.184-.646.66-1.19 1.614-2.28zM14.5 4.5 17 2m-2.5 2.5L17 7m-2.5-2.5h6"
      />
    </svg>
  );
};
export default SwipeLeft_04;
