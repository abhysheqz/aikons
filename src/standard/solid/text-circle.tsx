import React from "react";
const TextCircle: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1M8.5 7.75a.25.25 0 0 1 .25-.25H11V16h-.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-.75V7.5h2.25a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0v-.5A1.75 1.75 0 0 0 14.75 6h-6A1.75 1.75 0 0 0 7 7.75v.5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextCircle;
