import React from "react";
const Nose: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 17c2 0 2.5 4 5 4s3-4 5-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 3c0 2.279-1.368 7.018-2.764 9.112-1.573 2.36-2.956 6.265.002 7.692C7.198 20.51 9 19.087 9 19.087M15.5 3c0 2.278 1.368 7.018 2.764 9.112 1.573 2.36 2.956 6.265-.002 7.692-1.46.705-3.262-.717-3.262-.717"
      />
    </svg>
  );
};
export default Nose;
