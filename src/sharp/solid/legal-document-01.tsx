import React from "react";
const LegalDocument_01: React.FC<
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
        d="M2.47 1.47A.75.75 0 0 1 3 1.25h18a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53m8.999 4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1.47-1.47-2.97 2.97-1.06-1.06 2.97-2.97-1.47-1.47a.75.75 0 0 1 0-1.06zM8 18.75h8v-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LegalDocument_01;
