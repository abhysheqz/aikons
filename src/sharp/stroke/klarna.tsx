import React from "react";
const Klarna: React.FC<
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
      <circle cx={20} cy={18.5} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 12.5s5.198-2.654 5.198-9H15c0 6.5-4 9.5-4 9.5l5.5 7.5h-4.607zm0 0v-9H2v17h4z"
      />
    </svg>
  );
};
export default Klarna;
