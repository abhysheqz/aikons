import React from "react";
const PropertyAdd: React.FC<
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
        d="M.75 2a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v4.25H.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.75 7.75h19.5v5.5h-3.5v3h-3v4.5H1.5A.75.75 0 0 1 .75 20zM7.5 13h-2v-1.5h2zm8 0h-6v-1.5h6zm-8 4h-2v-1.5h2zm5 0h-3v-1.5h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 19.75v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyAdd;
