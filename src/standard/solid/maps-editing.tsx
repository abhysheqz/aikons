import React from "react";
const MapsEditing: React.FC<
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
        d="M18.97 12.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.53.22H14a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .22-.53z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m11.75 20.424-3-1.286V2.506l5.5 2.357v10.206l-1.841 1.84a2.25 2.25 0 0 0-.659 1.592zM22.75 13.069V7A1.75 1.75 0 0 0 21 5.25h-5.25v8.319l2.159-2.16a2.25 2.25 0 0 1 3.182 0zM7.25 2.537 2.217 5.053a1.75 1.75 0 0 0-.967 1.565v11.995a1.75 1.75 0 0 0 2.303 1.66l3.697-1.232z"
      />
    </svg>
  );
};
export default MapsEditing;
