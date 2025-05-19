import React from "react";
const Album_01: React.FC<
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
        d="M20.806 7.194h-2.917V5.25h3.889c.537 0 .972.435.972.972v15.556a.97.97 0 0 1-.972.972H6.222a.97.97 0 0 1-.972-.972v-3.89h1.944v2.918h13.612z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.222 1.25a.97.97 0 0 0-.972.972v15.556c0 .537.435.972.972.972h15.556a.97.97 0 0 0 .972-.972V2.222a.97.97 0 0 0-.972-.972zm.972 15.556V3.194h13.612v7.89l-3.863-3.089-8.81 8.81z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Album_01;
