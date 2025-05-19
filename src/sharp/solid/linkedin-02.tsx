import React from "react";
const Linkedin_02: React.FC<
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
        d="M6.5 9.5H2V22h4.5zM6.5 4.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M14 9.5H9.5V22H14v-6.25a1.75 1.75 0 1 1 3.5 0V22h4.499L22 14c0-2.485-2.364-4.5-4.703-4.5-1.332 0-2.52.653-3.297 1.674z"
      />
    </svg>
  );
};
export default Linkedin_02;
