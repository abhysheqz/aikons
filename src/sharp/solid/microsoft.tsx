import React from "react";
const Microsoft: React.FC<
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
        d="M12.97 12.97a.75.75 0 0 1 .53-.22H22a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 .22-.53M1.47 1.47A.75.75 0 0 1 2 1.25h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53M1.47 12.97a.75.75 0 0 1 .53-.22h8.5a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 .22-.53M12.75 2a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default Microsoft;
