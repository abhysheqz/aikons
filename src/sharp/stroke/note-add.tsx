import React from "react";
const NoteAdd: React.FC<
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
        d="M16 2v4m-5-4v4M6 2v4M20 12V4H2v18h11M18 14v8m4-4h-8M7 16h4m-4-5h8"
      />
    </svg>
  );
};
export default NoteAdd;
