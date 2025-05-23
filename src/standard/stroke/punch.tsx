import React from "react";
const Punch: React.FC<
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
        d="M6.6 13.782v-2.781m0 2.781a1.79 1.79 0 0 1-1.8 1.779A1.79 1.79 0 0 1 3 13.782V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5.03c0 1.526 0 2.29-.157 2.918a5.37 5.37 0 0 1-3.95 3.904c-.408.1-1.11.135-1.968.148H13v-1a2 2 0 0 1 2-2h.6m-9-3.218v1.334a1.79 1.79 0 0 0 1.8 1.779c.994 0 1.8-.797 1.8-1.779m0 0v-4.115m0 4.115v.796a1.79 1.79 0 0 0 1.8 1.779c.994 0 1.8-.796 1.8-1.779v-.69M17.4 11v4.22a1.79 1.79 0 0 1-1.8 1.78m-1.8-1.78v-4.22m0 4.22a1.79 1.79 0 0 0 1.8 1.78"
      />
    </svg>
  );
};
export default Punch;
