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
        fill="currentColor"
        fillRule="evenodd"
        d="M19.957 18.293 22.75 15.5l-1.414-1.414-2.793 2.793-2.793-2.793-1.414 1.414 2.793 2.793-2.793 2.793L15.75 22.5l2.793-2.793 2.793 2.793 1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 3h3V1.5h2V3h3V1.5h2V3h3a.75.75 0 0 1 .75.75v8.8l-2.207 2.208-2.793-2.793-3.535 3.535 2.793 2.793-2.793 2.793 1.414 1.414H1.999a.75.75 0 0 1-.75-.75v-18A.75.75 0 0 1 2 3h3V1.5h2zm0 7.5h8V9H7zm0 5h4V14H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteRemove;
