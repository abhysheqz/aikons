import React from "react";
const FilmRoll_01: React.FC<
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
        d="M3.5 4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1V22a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5h-2V3H8v1.5H6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 4.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 22a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M20 8.5h-6.5v-2H20a2 2 0 0 1 2 2v3.965a2 2 0 0 1-.89 1.664L19 15.536v1.465A2 2 0 0 1 17 19h-3.5v-2H17v-2a1 1 0 0 1 .445-.83L20 12.464z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilmRoll_01;
