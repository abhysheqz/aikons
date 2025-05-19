import React from "react";
const ImageUpload: React.FC<
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
        d="M4.679 1.75h11.389l-2.409 2.409A2.25 2.25 0 0 0 16 7.872V9.75a2.25 2.25 0 0 0 4.5 0V7.872c.57.2 1.203.165 1.75-.106v11.555a2.93 2.93 0 0 1-2.929 2.929H4.68a2.93 2.93 0 0 1-2.929-2.929V4.68A2.93 2.93 0 0 1 4.679 1.75m4.071 9.252c.48 0 .94.19 1.28.53l3.97 3.97 1.97-1.97a1.81 1.81 0 0 1 2.56 0l1.768 1.768v4.021c0 .54-.437.977-.977.977H4.68a.976.976 0 0 1-.977-.977V15.3l3.768-3.768c.34-.34.8-.53 1.28-.53"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.543 2.043a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L19.25 5.164V9.75a1 1 0 1 1-2 0V5.164l-1.293 1.293a1 1 0 1 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageUpload;
