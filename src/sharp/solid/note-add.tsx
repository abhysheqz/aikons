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
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 17.5v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 3h3V1.5h2V3h3V1.5h2V3h3a.75.75 0 0 1 .75.75V13h-4.5v3h-3v5h3v1.5H2a.75.75 0 0 1-.75-.75v-18A.75.75 0 0 1 2 3h3V1.5h2zm0 7.5h8V9H7zm0 5h4V14H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteAdd;
