import React from "react";
const CursorDisabled_02: React.FC<
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
        d="M19.09 14.56a3.342 3.342 0 0 0-4.53 4.53zm1.35 1.35-4.53 4.53a3.342 3.342 0 0 0 4.53-4.53m-6.652-2.123a5.25 5.25 0 1 1 7.424 7.425 5.25 5.25 0 0 1-7.424-7.424"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.33 2.87c-.37-.964.576-1.91 1.54-1.54l15.117 5.815c1.042.4 1.009 1.887-.051 2.24l-6.413 2.138-2.137 6.413c-.353 1.06-1.84 1.093-2.241.05z"
      />
    </svg>
  );
};
export default CursorDisabled_02;
