import React from "react";
const ArtificialIntelligence_03: React.FC<
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
        d="M1.25 3.25a1.5 1.5 0 1 1 2.995.123l1.99 1.377H10v1.5H6a.75.75 0 0 1-.427-.133l-2.182-1.51A1.5 1.5 0 0 1 1.25 3.25M1.25 8.75A1.5 1.5 0 0 1 4.05 8H10v1.5H4.05a1.5 1.5 0 0 1-2.8-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.371 11.726a9 9 0 0 0 3.38 5.648v5.376h11v-2.71l2.862-.954 1.018-3.563 1.705-.852a.75.75 0 0 0 .289-1.087l-2.377-3.565A9 9 0 0 0 6.126 2.85l.577.4h4.798V11H4.735a3 3 0 0 1-2.364.726"
      />
    </svg>
  );
};
export default ArtificialIntelligence_03;
