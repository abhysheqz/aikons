import React from "react";
const FuelStation: React.FC<
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
        d="M2.75 3.225a.97.97 0 0 1 .964-.975h11.572a.97.97 0 0 1 .964.975v17.55a.97.97 0 0 1-.964.975H3.714a.97.97 0 0 1-.964-.975zm11.573.975H4.68V9h9.643zm-3.672 7.672-1.303-.744-2.641 4.622h3l-1.359 2.378 1.303.744 2.64-4.622h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 21.75h-16v-2h16zM17.5 6h2a1 1 0 0 1 .832.446l2 3A1 1 0 0 1 22.5 10v6.5a2.5 2.5 0 0 1-5 0V15h-2v-2h3a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 1 0v-6.197L18.965 8H17.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FuelStation;
