import React from "react";
const PasswordValidation: React.FC<
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
        d="M16 22.75a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5m-.767-3.633 4.316-4.604-1.094-1.026-3.184 3.396-1.205-1.377-1.129.988z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.536 1.53a.99.99 0 0 1 .691-.28h19.546c.54 0 .977.43.977.958v6.709h-1.954v-5.75H3.204v7.666h4.823v1.917h-5.8a.97.97 0 0 1-.978-.958V2.208c0-.254.103-.498.286-.677"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 6h2.007v2H6zm4.996 0h2.008v2h-2.008zm4.996 0H18v2h-2.008z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PasswordValidation;
