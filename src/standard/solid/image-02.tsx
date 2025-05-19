import React from "react";
const Image_02: React.FC<
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
        d="M1.75 4.679A2.93 2.93 0 0 1 4.679 1.75H19.32a2.93 2.93 0 0 1 2.929 2.929V19.32a2.93 2.93 0 0 1-2.929 2.929H4.68a2.93 2.93 0 0 1-2.929-2.929zm12.5 2.823a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-5.5 3.5c.48 0 .94.19 1.28.53l3.97 3.97 1.97-1.97a1.81 1.81 0 0 1 2.56 0l1.768 1.768v4.021c0 .54-.437.977-.977.977H4.68a.976.976 0 0 1-.977-.977V15.3l3.768-3.768c.34-.34.8-.53 1.28-.53"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Image_02;
