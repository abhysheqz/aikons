import React from "react";
const Dna: React.FC<
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
        d="M16.993 1.293a1 1 0 0 1 0 1.414c-.234.234-.422.761-.433 1.814-.008.802.082 1.72.189 2.73 1.01.107 1.928.197 2.73.189 1.053-.011 1.58-.199 1.814-.433a1 1 0 1 1 1.414 1.414c-.837.838-2.096 1.007-3.208 1.019-.79.008-1.67-.067-2.55-.157.072.923.107 1.865.032 2.747-.11 1.272-.46 2.578-1.417 3.534-.956.957-2.262 1.308-3.534 1.417-.882.075-1.824.04-2.747-.033.09.88.165 1.761.157 2.551-.012 1.112-.181 2.37-1.019 3.208a1 1 0 0 1-1.414-1.414c.234-.234.422-.761.433-1.814.008-.802-.082-1.72-.189-2.73-1.01-.107-1.928-.197-2.73-.189-1.053.011-1.58.199-1.814.433a1 1 0 0 1-1.414-1.414c.837-.838 2.096-1.007 3.208-1.019.79-.008 1.67.067 2.55.157-.072-.923-.107-1.865-.032-2.747.11-1.272.46-2.578 1.417-3.534.956-.957 2.262-1.308 3.534-1.417.882-.075 1.824-.04 2.747.033-.09-.88-.165-1.761-.157-2.551.012-1.112.181-2.37 1.019-3.208a1 1 0 0 1 1.414 0m-2.07 7.783c-.998-.089-1.94-.136-2.782-.064-1.071.092-1.819.366-2.291.838s-.746 1.22-.838 2.291c-.072.841-.025 1.784.064 2.783.999.089 1.942.136 2.783.064 1.071-.092 1.819-.366 2.291-.838s.746-1.22.838-2.291c.072-.841.025-1.784-.064-2.783"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.793 7.793a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414M15.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414M3.293 15.293a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414M7.793 10.793a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dna;
