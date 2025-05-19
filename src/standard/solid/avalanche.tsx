import React from "react";
const Avalanche: React.FC<
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
        d="M9.446 4.168a1 1 0 0 1 1.386.278l2 3.002a1 1 0 1 1-1.664 1.109l-2-3.002a1 1 0 0 1 .278-1.387"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.336 3.693a2 2 0 0 1 3.328 0l5.026 7.539A5.06 5.06 0 0 1 15 10c2.456 0 4.5 1.771 4.92 4.106A4 4 0 0 1 23 18c0 1.964-1.422 3.663-3.33 3.986q-.082.014-.166.014H2a1 1 0 0 1 0-2h13.132L8.222 9.636l-.294.735a1 1 0 0 1-1.375.523L5 10.118l-1.553.776a1 1 0 0 1-1.375-.523l-1-2.5a1 1 0 0 1 .096-.926z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Avalanche;
