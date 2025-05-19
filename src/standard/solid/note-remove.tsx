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
        d="M14.793 14.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414L19.914 18l2.293 2.293a1 1 0 0 1-1.414 1.414L18.5 19.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.086 18l-2.293-2.293a1 1 0 0 1 0-1.414M6 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 5.5A2.75 2.75 0 0 1 4.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75v7.334q-.28.16-.518.398L18.5 14.465l-1.232-1.233a2.5 2.5 0 0 0-3.536 3.536L14.965 18l-1.233 1.232a2.5 2.5 0 0 0-.017 3.518H4.5A2.75 2.75 0 0 1 1.75 20zM7.5 9.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteRemove;
