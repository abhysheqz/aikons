import React from "react";
const NoteRemove: React.FC<
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
        d="m21.5 15-3 3m0 0-3 3m3-3 3 3m-3-3-3-3M16 2v2.5M11 2v2.5M6 2v2.5M11.5 22h-7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2V11M7.5 16h3m-3-5h7"
      />
    </svg>
  );
};
export default NoteRemove;
