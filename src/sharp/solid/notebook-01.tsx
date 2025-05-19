import React from "react";
const Notebook_01: React.FC<
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
        d="M3.5 2a.75.75 0 0 1 .75-.75h17.5a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H4.25A.75.75 0 0 1 3.5 22v-3h-2v-2h2v-4h-2v-2h2V7h-2V5h2zm14 3h-9v5h9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notebook_01;
