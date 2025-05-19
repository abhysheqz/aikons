import React from "react";
const Forward_02: React.FC<
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
        d="M11.63 5.347a.75.75 0 0 0-.38.653v12a.75.75 0 0 0 1.136.643l10-6a.75.75 0 0 0 0-1.286l-10-6a.75.75 0 0 0-.755-.01"
      />
      <path
        fill="currentColor"
        d="M1.63 5.347A.75.75 0 0 0 1.25 6v12a.75.75 0 0 0 1.136.643l10-6a.75.75 0 0 0 0-1.286l-10-6a.75.75 0 0 0-.756-.01"
      />
    </svg>
  );
};
export default Forward_02;
