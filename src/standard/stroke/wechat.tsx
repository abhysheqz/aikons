import React from "react";
const Wechat: React.FC<
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
        strokeWidth={2}
        d="M7 7h.009m5.982 0H13M17.991 14.5H18m-4 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.999 16.023c.019-2.751-2.651-5-5.965-5.023S10.02 13.188 10 15.94c-.02 2.75 2.687 5.037 6 5.06a6.36 6.36 0 0 0 2.971-.686l3.01.682a.01.01 0 0 0 .012-.014l-.989-2.483c.557-.75.988-1.53.995-2.476Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.018 17c-1.52 0-2.83-.381-4.04-1.021l-3.965.926q-.01 0-.01-.009l1.072-3.462C2.347 12.386 2 11.267 2 9.954 2 6.114 5.582 3 10 3s8 3.113 8 6.954q0 .534-.09 1.046"
      />
    </svg>
  );
};
export default Wechat;
