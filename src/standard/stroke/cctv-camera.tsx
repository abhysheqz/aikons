import React from "react";
const CctvCamera: React.FC<
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
        d="M15 13.5v3a3 3 0 0 0 3 3h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.691 7.5h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7.5h4.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.554 2.5H2l.882 3.527a1 1 0 0 0 .564.671l3.726 1.656a1 1 0 0 1 .488.467l2.064 4.126a1 1 0 0 0 .894.553h5.936C19.562 13.5 22 11.038 22 8s-2.438-5.5-5.446-5.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17.5v4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 7c-.614.55-1 1.612-1 2.5a3 3 0 0 0 5 2.236"
      />
    </svg>
  );
};
export default CctvCamera;
