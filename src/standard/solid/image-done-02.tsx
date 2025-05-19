import React from "react";
const ImageDone_02: React.FC<
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
        d="M4.679 1.749h14.494l-2.898 3.667-.472-.45a2.25 2.25 0 0 0-3.106 3.256l2.258 2.155a2.25 2.25 0 0 0 3.319-.233l3.976-5.031V19.32a2.93 2.93 0 0 1-2.929 2.929H4.68a2.93 2.93 0 0 1-2.929-2.928V4.677a2.93 2.93 0 0 1 2.929-2.929m4.071 9.252c.48 0 .94.19 1.28.53l3.97 3.97 1.97-1.97a1.81 1.81 0 0 1 2.56 0l1.768 1.768v4.021c0 .54-.437.977-.977.977H4.68a.976.976 0 0 1-.977-.977V15.3L7.47 11.53c.34-.34.8-.53 1.28-.53"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.87 1.965a1 1 0 0 1 .165 1.404l-4.742 6a1 1 0 0 1-1.475.104L13.56 7.317a1 1 0 0 1 1.38-1.446l1.464 1.397 4.061-5.139a1 1 0 0 1 1.405-.164"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDone_02;
