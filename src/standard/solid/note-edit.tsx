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
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M18.97 12.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.53.22H14a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .22-.53z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 5.5A2.75 2.75 0 0 1 4.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75v5.378a2.25 2.25 0 0 0-2.341.531l-5.5 5.5a2.25 2.25 0 0 0-.659 1.591V21c0 .707.326 1.337.836 1.75H4.5A2.75 2.75 0 0 1 1.75 20zM7.5 9.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteEdit;
