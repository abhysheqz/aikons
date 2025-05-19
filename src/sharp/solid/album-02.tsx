import React from "react";
const Album_02: React.FC<
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
        d="M20.805 7.194H17.89V5.25h3.889c.537 0 .972.435.972.972v15.556a.97.97 0 0 1-.973.972H6.223a.97.97 0 0 1-.972-.972v-3.89h1.944v2.917h13.611z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.222 1.25a.97.97 0 0 0-.972.972v15.556c0 .537.435.972.972.972h15.555a.97.97 0 0 0 .973-.972V2.222a.97.97 0 0 0-.973-.972zm.973 9.015v-7.07h13.611v13.61H15.36c-.747-1.73-2.057-3.248-3.778-4.388-2.194-1.455-4.93-2.215-7.72-2.165q-.333 0-.667.013"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.998 6h2v2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Album_02;
