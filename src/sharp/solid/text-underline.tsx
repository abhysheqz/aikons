import React from "react";
const TextUnderline: React.FC<
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
        d="M4.5 10V2.5h2V10a5.5 5.5 0 1 0 11 0V2.5h2V10a7.5 7.5 0 0 1-15 0M21 21.5H3v-2h18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextUnderline;
