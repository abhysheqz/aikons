import React from "react";
const Move: React.FC<
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
        d="m12 2 3.707 3.707-1.414 1.414L13 5.828v3.586h-2V5.828L9.707 7.121 8.293 5.707zM13 14.086v4.085l1.293-1.293 1.414 1.415L12 22l-3.707-3.707 1.414-1.415L11 18.171v-4.085zM18.172 11l-1.293-1.293 1.414-1.414L22 12l-3.707 3.707-1.414-1.414L18.172 13h-3.586v-2zM5.828 13l1.293 1.293-1.414 1.414L2 12l3.707-3.707 1.414 1.414L5.828 11h3.586v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Move;
