import React from "react";
const MouseLeftClick_04: React.FC<
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
        d="M14.25 1.273V5.25H15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h.75V1.273c-2.808.179-4.71 1.374-5.887 3.273C5.625 6.542 5.25 9.216 5.25 12c0 2.785.375 5.459 1.613 7.454 1.28 2.064 3.414 3.296 6.637 3.296s5.357-1.232 6.637-3.296c1.238-1.995 1.613-4.67 1.613-7.454 0-2.785-.375-5.458-1.613-7.454-1.178-1.899-3.08-3.094-5.887-3.273"
      />
      <path fill="currentColor" d="M12.75 6.75v3h1.5v-3z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 5.777C2.52 4.06 3.33 2.513 4.506 1.25L5.97 2.614c-.932 1-1.542 2.19-1.743 3.473z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_04;
