import React from "react";
const Sushi_02: React.FC<
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
        d="M15 3.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5M16.25 9a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M15 6.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.765 1.036a1 1 0 0 0-1.23.7L6.573 16.146a1 1 0 0 0 1.929.53l3.963-14.412a1 1 0 0 0-.7-1.229m-4.675 17a1 1 0 0 0-1.23.7l-.824 3a1 1 0 0 0 1.928.53l.825-3a1 1 0 0 0-.7-1.23"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.964 12.235a1 1 0 0 0-1.23-.699l-20 5.5a1 1 0 0 0 .53 1.928l20-5.5a1 1 0 0 0 .7-1.229"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sushi_02;
