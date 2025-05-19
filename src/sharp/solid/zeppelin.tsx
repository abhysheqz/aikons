import React from "react";
const Zeppelin: React.FC<
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
        d="m17.446 19.124.827-3.309 1.455.364-1 4.003a.75.75 0 0 1-.875.553l-5-1a.75.75 0 0 1-.435-.262l-2-2.463 1.164-.946 1.83 2.254z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.959 4.247c-2.635 0-6.003.779-8.717 1.936-1.358.579-2.594 1.27-3.505 2.04-.675.57-1.251 1.251-1.487 2.024h3.797v1.5H1.25c.236.773.812 1.455 1.487 2.025.91.769 2.147 1.46 3.505 2.04 2.714 1.156 6.082 1.935 8.717 1.935 4.334 0 7.791-2.926 7.791-6.75s-3.457-6.75-7.791-6.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.665 3.33a.75.75 0 0 1 .865.14l2.5 2.5-1.06 1.06-2.118-2.117-.934.467.794 2.38-1.423.474-1-2.997a.75.75 0 0 1 .376-.908zM4.665 18.67a.75.75 0 0 0 .865-.14l2.5-2.5-1.06-1.06-2.118 2.117-.935-.467.795-2.386-1.423-.474-1 3.003a.75.75 0 0 0 .376.908z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zeppelin;
