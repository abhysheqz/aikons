import React from "react";
const TextColor: React.FC<
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
        d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M10.061 2.656a1 1 0 0 1 .94-.656h2a1 1 0 0 1 .938.656l5.5 15a1 1 0 1 1-1.878.688L15.97 14H8.032l-1.593 4.344a1 1 0 0 1-1.878-.688zM8.765 12h6.47l-2.933-8h-.603z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextColor;
