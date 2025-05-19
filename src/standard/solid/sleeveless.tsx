import React from "react";
const Sleeveless: React.FC<
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
        d="M9.206 1.153c.671.512 1.578.85 2.555.85.975 0 1.862-.336 2.536-.85l.909 1.193a5.7 5.7 0 0 1-3.445 1.157 5.76 5.76 0 0 1-3.464-1.157z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.17 1.129a.75.75 0 0 1 .33.621c0 1.433.241 2.654.668 3.487.417.814.95 1.17 1.582 1.17.631 0 1.165-.356 1.582-1.17.427-.833.668-2.054.668-3.487a.75.75 0 0 1 1.028-.696l2.5 1A.75.75 0 0 1 18 2.75c0 3.795 1.403 4.988 2.085 5.33a.75.75 0 0 1 .415.67v12a1.75 1.75 0 0 1-1.75 1.75h-14A1.75 1.75 0 0 1 3 20.75v-12a.75.75 0 0 1 .415-.67C4.097 7.737 5.5 6.544 5.5 2.75a.75.75 0 0 1 .471-.696l2.5-1a.75.75 0 0 1 .7.075"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sleeveless;
