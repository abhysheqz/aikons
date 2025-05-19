import React from "react";
const Wordpress: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 6h1m0 0 4.457 11.492c.65 1.677.975 2.515 1.525 2.508s.853-.854 1.461-2.548l.057-.159M3 6h3.5m0 0h.957M6.5 6l4 11.294m0 0L12.816 11M10 6h1m0 0 4.457 11.492c.65 1.677.976 2.515 1.525 2.508s.853-.854 1.461-2.548l.057-.159M11 6h3.5m0 0h.957M14.5 6l4 11.294m0 0 2.029-5.65m0 0 1.009-2.41a7.7 7.7 0 0 0 .415-3.47C21.796 4.358 21.158 3 19.5 3c-1.538 0-2.29 1.723-1.311 2.894 1.58 1.888 2.982 3.981 2.339 5.75"
      />
    </svg>
  );
};
export default Wordpress;
