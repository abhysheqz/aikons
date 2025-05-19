import React from "react";
const NoteEdit: React.FC<
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
        d="M16 2v4m-5-4v4M6 2v4M20 11V4H2v18h9M7 16h4m-4-5h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.502 21.498H14v-2.5l5.495-5.493a.01.01 0 0 1 .014 0l2.486 2.486a.01.01 0 0 1 0 .014z"
      />
    </svg>
  );
};
export default NoteEdit;
