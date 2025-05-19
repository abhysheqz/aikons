import React from "react";
const Cafe: React.FC<
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
        d="M20.288 5.392v.27c0 1.161-.58 2.185-1.463 2.8V12h-1.95V9.075a3.4 3.4 0 0 1-2.437-1.024A3.4 3.4 0 0 1 12 9.075 3.4 3.4 0 0 1 9.563 8.05a3.4 3.4 0 0 1-2.438 1.024V12h-1.95V8.463a3.41 3.41 0 0 1-1.462-2.8v-.27L5.598 2.25h12.804z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.2 11.025V15.9h4.875v5.85h-1.95v-3.9H4.2v3.9H2.25V11.025zM21.75 11.025V21.75H19.8v-3.9h-2.925v3.9h-1.95V15.9H19.8v-4.875z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.15 12.974h11.7v1.95h-4.875V19.8h.975v1.95h-3.9V19.8h.975v-4.875H6.15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cafe;
