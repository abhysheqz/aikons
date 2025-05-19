import React from "react";
const Wheelchair: React.FC<
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
        d="M7 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0M16.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 16A1.5 1.5 0 0 1 7 14.5h.009a1.5 1.5 0 0 1 0 3H7A1.5 1.5 0 0 1 5.5 16M1 3a1 1 0 0 1 1-1h1.67a2 2 0 0 1 1.966 1.631L6.08 6h9.42a2 2 0 0 1 2 2v5a2 2 0 0 1 1.633.892l1.253 1.883 1.249-.49a1 1 0 1 1 .73 1.862l-1.25.49a2 2 0 0 1-2.394-.755L17.5 15.049V18a1 1 0 1 1-2 0v-3h-3.916a1 1 0 0 1-.916-.6 4 4 0 0 0-4.45-2.324 1 1 0 0 1-1.162-.732l-.024-.095-.015-.065L3.67 4H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wheelchair;
