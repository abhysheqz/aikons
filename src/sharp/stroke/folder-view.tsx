import React from "react";
const FolderView: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H22v6.003m-9.982-6.003L9 3H2v18h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 21c2.761 0 5-3 5-3s-2.239-3-5-3-5 3-5 3 2.239 3 5 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.016 18.002h.009"
      />
    </svg>
  );
};
export default FolderView;
