import React from "react";
const HalalLab: React.FC<
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
        d="M7 3H3v18h4a5 5 0 0 1 10 0h4a9 9 0 0 0-14-7.485z"
      />
      <path fill="currentColor" d="M12 3a9 9 0 0 0 9 9V8a5 5 0 0 1-5-5z" />
    </svg>
  );
};
export default HalalLab;
