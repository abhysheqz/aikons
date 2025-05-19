import React from "react";
const Router_02: React.FC<
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
        d="M2 13.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75zM7.009 17H5v2h2.009zm3.996 0h-2.01v2h2.01zM15 17h-2.009v2H15z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.952 10.514C1.889 9.208 1.25 7.617 1.25 5.888c0-1.735.644-3.33 1.712-4.638l1.55 1.265C3.7 3.51 3.25 4.666 3.25 5.888c0 1.218.447 2.372 1.253 3.364zM5.394 8.585a5.1 5.1 0 0 1-.783-2.697c0-.985.29-1.907.79-2.709L7.1 4.237a3.1 3.1 0 0 0-.488 1.651c0 .579.168 1.135.483 1.643zM10.25 7v6.883h-2V7a1.5 1.5 0 0 1 .996-2.622h.006A1.5 1.5 0 0 1 10.25 7"
      />
    </svg>
  );
};
export default Router_02;
