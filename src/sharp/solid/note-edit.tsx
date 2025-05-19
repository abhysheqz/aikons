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
      <path fill="currentColor" d="M14.75 20v2.5h2.5l5.5-5.5-2.5-2.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 3h3V1.5h2V3h3V1.5h2V3h3a.75.75 0 0 1 .75.75v8.128l-7.5 7.5V22.5H2a.75.75 0 0 1-.75-.75v-18A.75.75 0 0 1 2 3h3V1.5h2zm0 7.5h8V9H7zm0 5h4V14H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteEdit;
