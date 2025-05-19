import React from "react";
const SdCard: React.FC<
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
        d="M5.5 2v8l-2 3v9h17V2zm3 3v4h2V5zM12 5v4h2V5zm3.5 0v4h2V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SdCard;
