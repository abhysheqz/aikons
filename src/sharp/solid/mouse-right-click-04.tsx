import React from "react";
const MouseRightClick_04: React.FC<
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
        d="M9.75 1.273V5.25H9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-.75V1.273c2.808.179 4.71 1.374 5.887 3.273C18.375 6.542 18.75 9.216 18.75 12c0 2.785-.375 5.459-1.613 7.454-1.28 2.064-3.414 3.296-6.637 3.296s-5.357-1.232-6.637-3.296C2.625 17.46 2.25 14.784 2.25 12c0-2.785.375-5.458 1.613-7.454 1.178-1.9 3.08-3.094 5.887-3.273"
      />
      <path fill="currentColor" d="M11.25 6.75v3h-1.5v-3z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 5.777c-.269-1.716-1.079-3.264-2.256-4.527l-1.463 1.364c.933 1 1.543 2.19 1.744 3.473z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_04;
