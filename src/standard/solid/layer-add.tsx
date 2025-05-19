import React from "react";
const LayerAdd: React.FC<
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
        d="M10.75 8A2.75 2.75 0 0 0 8 10.75v9a2.75 2.75 0 0 0 2.75 2.75h9a2.75 2.75 0 0 0 2.75-2.75v-9A2.75 2.75 0 0 0 19.75 8zm5.5 4.25a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.75 1A2.75 2.75 0 0 0 1 3.75v11a2.75 2.75 0 0 0 2.75 2.75h3v-6.75a4 4 0 0 1 4-4h6.75v-3A2.75 2.75 0 0 0 14.75 1z"
      />
    </svg>
  );
};
export default LayerAdd;
