import React from "react";
const MailSearch_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h6.528a.977.977 0 0 0 0-1.955H3.932a.977.977 0 0 1-.977-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v2.406a.977.977 0 1 0 1.954 0V4.932A2.93 2.93 0 0 0 19.572 2zm13.346 9.797a4.527 4.527 0 1 0 2.412 8.357l1.355 1.351a1 1 0 1 0 1.412-1.416l-1.352-1.348a4.527 4.527 0 0 0-3.828-6.944m-2.526 4.526a2.526 2.526 0 1 1 5.052 0 2.526 2.526 0 0 1-5.052 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSearch_01;
