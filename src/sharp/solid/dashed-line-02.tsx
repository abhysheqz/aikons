import React from "react";
const DashedLine_02: React.FC<
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
        d="M20 3.998h-3v-2h5v5h-2zM2 2h5v2H4v3H2zm8 0h4v2h-4zM2 14v-4h2v4zm18 0v-4h2v4zm0 6v-3h2v5h-5v-2zm-16 .002v-3H2v5h5v-2zM10 20h4v2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashedLine_02;
