import React from "react";
const ClosedCaptionAlt: React.FC<
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
        d="M22 1.25H2a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h3.25V22a.75.75 0 0 0 1.219.586l4.794-3.836H22a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75M9 11.75h2v-1.5H9zm4 0h2v-1.5h-2zm4 0h2v-1.5h-2zm-8 3h5v-1.5H9zm7 0h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ClosedCaptionAlt;
