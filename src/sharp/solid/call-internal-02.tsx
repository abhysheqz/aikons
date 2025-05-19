import React from "react";
const CallInternal_02: React.FC<
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
        d="M15.914 3.914 14.828 5h3.344l-1.086-1.086L18.5 2.5 22 6l-3.5 3.5-1.414-1.414L18.172 7h-3.344l1.086 1.086L14.5 9.5 11 6l3.5-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.5 2.5H2q0 19 19 19V16l-4.5-2-3 3c-3.694-1.583-5.417-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallInternal_02;
