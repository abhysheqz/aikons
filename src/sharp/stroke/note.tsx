import React from "react";
const Note: React.FC<
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
        d="M7 6.792 2 8.297l4.021 13.661 6.98-2.1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.99 5.325 11.045 1.959a.01.01 0 0 0-.012.007L7.06 15.573a.01.01 0 0 0 .007.012l10.94 3.4a.01.01 0 0 0 .013-.006l3.975-13.642a.01.01 0 0 0-.007-.012ZM12.871 6.988l4.783 1.302M11.848 10.798l2.398.635"
      />
    </svg>
  );
};
export default Note;
