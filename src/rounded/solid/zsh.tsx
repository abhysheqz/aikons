import React from "react";
const Zsh: React.FC<
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
        d="M16.464 2.374c-1.143-.124-2.582-.124-4.419-.124s-3.366 0-4.509.124c-1.165.126-2.11.388-2.916.974A5.8 5.8 0 0 0 3.348 4.62c-.586.807-.848 1.75-.974 2.916-.124 1.143-.124 2.673-.124 4.51s0 3.275.124 4.418c.126 1.165.388 2.11.974 2.916a5.8 5.8 0 0 0 1.272 1.272c.807.586 1.75.848 2.916.974 1.143.124 2.673.124 4.51.124s3.275 0 4.418-.124c1.165-.126 2.11-.388 2.916-.974a5.8 5.8 0 0 0 1.272-1.272c.586-.807.848-1.75.974-2.916.124-1.143.124-2.582.124-4.419s0-3.366-.124-4.509c-.126-1.165-.388-2.11-.974-2.916a5.8 5.8 0 0 0-1.272-1.272c-.807-.586-1.75-.848-2.916-.974m.317 5.25a1 1 0 0 0-1.562-1.249l-8 10a1 1 0 0 0 1.562 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zsh;
