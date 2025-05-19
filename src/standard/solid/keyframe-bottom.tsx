import React from "react";
const KeyframeBottom: React.FC<
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
        d="M13.356 2.86a1.812 1.812 0 0 0-2.712 0L6.72 7.263a1.863 1.863 0 0 0 0 2.474l3.924 4.403a1.81 1.81 0 0 0 2.712 0l3.924-4.403a1.863 1.863 0 0 0 0-2.474zM13 17.5a1 1 0 1 0-2 0V20H3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeBottom;
