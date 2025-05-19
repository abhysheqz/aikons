import React from "react";
const LinkBackward: React.FC<
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
        d="M11.25 15.337c2.69.189 4.896 1.367 6.484 2.571.864.656 2.116 1.703 4.016 3.842v-3.19c0-5.853-4.678-10.614-10.5-10.746V2.25l-9 9.31 9 9.19z"
      />
    </svg>
  );
};
export default LinkBackward;
