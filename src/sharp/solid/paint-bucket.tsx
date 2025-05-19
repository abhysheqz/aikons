import React from "react";
const PaintBucket: React.FC<
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
        d="m13.853 18.913 6.81-6.828L9.855 1.25 8.44 2.662l1.316 1.32-7.377 7.397a3.87 3.87 0 0 0 0 5.464l2.064 2.07c.854.857 1.558 1.563 2.188 2.06.658.518 1.337.893 2.155.967q.361.033.724 0c.819-.074 1.497-.449 2.155-.968.63-.496 1.334-1.202 2.188-2.059m-8.357-7.827 5.672-5.688 5.672 5.688z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20 15.967c.059.058.754.724.853.827.197.204.461.491.728.817.264.324.543.701.76 1.086.206.365.409.83.409 1.303a2.75 2.75 0 1 1-5.5 0c0-.473.203-.938.409-1.303a8 8 0 0 1 .76-1.086c.267-.326.531-.613.728-.817.099-.103.794-.77.853-.827"
      />
    </svg>
  );
};
export default PaintBucket;
