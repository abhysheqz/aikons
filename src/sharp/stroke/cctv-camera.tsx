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
        d="M14.987 13.01v6.005h5.995M20.982 16.013v6.005M8.993 11.839l-.536.06c-.803.089-1.205.133-1.524.099-1.561-.17-2.792-1.555-2.927-3.296-.027-.357.017-.804.106-1.697"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.68 7.005h.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.986 7.005h4.496"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.086 2.018H2.126a.1.1 0 0 0-.1.1v3.815a.1.1 0 0 0 .065.094l5.411 1.985 2.471 4.997h6.526c3.166 0 6.142-3.011 5.415-6.434s-3.522-4.465-4.828-4.557Z"
      />
    </svg>
  );
};
export default CctvCamera;
