import React from "react";
const EuroSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.657 5c-2.012 0-3.484 1.823-3.484 3.861v.139H8v1.5h1.173v.139c0 2.038 1.472 3.861 3.484 3.861 1.317 0 2.42-.8 3.006-1.907l-1.326-.702c-.37.7-1.008 1.109-1.68 1.109-1.008 0-1.984-.963-1.984-2.361v-.139H13v-1.5h-2.327v-.139c0-1.398.976-2.361 1.984-2.361.672 0 1.31.409 1.68 1.109l1.326-.702c-.586-1.107-1.69-1.907-3.006-1.907"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EuroSquare;
