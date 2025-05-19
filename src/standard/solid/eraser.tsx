import React from "react";
const Eraser: React.FC<
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
        d="M9.5 21.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.822 1.522a1.764 1.764 0 0 0-2.504 0L9.465 6.404l6.68 6.68 4.839-4.868a1.78 1.78 0 0 0 0-2.507zM15.088 14.149l-6.68-6.68-5.892 5.928a1.78 1.78 0 0 0 0 2.506l3.056 3.076c.331.333.782.521 1.252.521h2.212c.47 0 .921-.188 1.253-.521z"
      />
    </svg>
  );
};
export default Eraser;
