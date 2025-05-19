import React from "react";
const More: React.FC<
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
        d="M12 4.139a2.361 2.361 0 1 0 0 4.722 2.361 2.361 0 0 0 0-4.722M7.75 6.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M1.25 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
    </svg>
  );
};
export default More;
