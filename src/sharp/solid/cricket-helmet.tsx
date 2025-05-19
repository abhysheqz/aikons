import React from "react";
const CricketHelmet: React.FC<
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
        d="M6.865 21.659c.04.019.18.091.18.091h8.02l-1.034-8.291L22.5 9.68l-.607-1.37-.283.126C20 4.762 16.285 2.25 11.98 2.25 6.206 2.25 1.5 6.853 1.5 12.562c0 3.178 1.461 6.017 3.75 7.905.68.562 1.081.858 1.321 1.018.12.08.214.135.294.174m3.377-3.159c.822 0 1.49-.672 1.49-1.5s-.667-1.5-1.49-1.5h-.014c-.822 0-1.489.672-1.489 1.5s.667 1.5 1.49 1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.473 12.124 1.476-.247.628 3.776 4.539-.487.159 1.492-.827.088v3.504h.748v1.5h-5.122l-.763-4.588-3.621-3.631 1.057-1.06 2.14 2.145zm4.479 8.126v-3.343l-2.129.228.518 3.115z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CricketHelmet;
