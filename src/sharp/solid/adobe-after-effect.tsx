import React from "react";
const AdobeAfterEffect: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm7.802 4.25 2.888 9.242-1.432.448-1.008-3.226v.036h-3v-.036L6.492 16.94l-1.431-.448L7.949 7.25zm-2.094 5h2.085L9 8.914zM18 9.25h-4.25v7.5H18a.75.75 0 0 0 .75-.75v-1.75h-1.5v1h-2v-1.63H18a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75m-.75 2.87h-2v-1.37h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AdobeAfterEffect;
