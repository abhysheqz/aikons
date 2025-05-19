import React from "react";
const KeyframeAlignVertical: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 12 12 8l-3.5 4 3.5 4zM12 19v3M12 2v3"
      />
    </svg>
  );
};
export default KeyframeAlignVertical;
