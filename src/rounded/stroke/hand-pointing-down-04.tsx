import React from "react";
const HandPointingDown_04: React.FC<
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
        d="M10.755 13.485v6.51c0 .831-.672 1.505-1.501 1.505-.83 0-1.502-.674-1.502-1.505V9.968m3.003 6.521 1.055-.027a2 2 0 0 0 1.949-2.003v-1.004m-.281 2.03 1.335-.055a2 2 0 0 0 1.95-2.003v-1.004m-.286 2.036 1.54-.189c1-.135 1.742-.994 1.733-2.004l-.048-5.2c0-2.184-2.113-4.566-4.38-4.566h-4.88c-1.192 0-2.61.78-3.835 2.848L4.993 7.786c-.58.756-1.407 2.118.165 3.985l2.594 2.76"
      />
    </svg>
  );
};
export default HandPointingDown_04;
