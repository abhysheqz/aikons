import React from "react";
const VideoAi: React.FC<
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
        d="M22.75 2.25H1.25v17.5H14v-3.41l1.6-.326a1.82 1.82 0 0 0 1.414-1.414l.327-1.6h3.318l.327 1.6a1.82 1.82 0 0 0 1.415 1.414l.349.071zM9 15l7-4-7-4zm10.761-.15-.122-.6H18.36l-.122.6a3.07 3.07 0 0 1-2.39 2.389l-.599.122v1.278l.6.122a3.07 3.07 0 0 1 2.389 2.39l.122.599h1.278l.122-.6a3.07 3.07 0 0 1 2.39-2.389l.599-.122V17.36l-.6-.122a3.07 3.07 0 0 1-2.389-2.39"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VideoAi;
