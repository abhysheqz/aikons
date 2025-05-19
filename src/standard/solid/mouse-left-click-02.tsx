import React from "react";
const MouseLeftClick_02: React.FC<
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
        d="M2.75 5a3.25 3.25 0 1 1 3.248 3.25A3.25 3.25 0 0 1 2.75 5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.512 9.513c-.014.464-.012 1.546-.011 2.17V12c0 2.403.225 4.684.462 6.425.33 2.414 2.236 4.28 4.699 4.457.945.069 2.069.118 3.339.118s2.394-.05 3.34-.118c2.462-.177 4.368-2.043 4.698-4.457.237-1.741.462-4.022.462-6.425q0-.518-.013-1.025c-.05-1.93-.229-3.74-.422-5.198-.337-2.54-2.388-4.444-4.925-4.641C15.15 1.059 14.05 1 13 1c-.26 0-.896.009-1.536.03-.128.005-.309.01-.518.015-.731.02-1.81.049-2.183.094a4.77 4.77 0 0 1 1.57 1.924l.464-.013.733-.02q.241-.008.47-.014V10H6.504q0-.154.004-.277a4.8 4.8 0 0 1-1.996-.21m9.489.487V3.017c.67.022 1.346.063 1.985.113 1.611.125 2.887 1.322 3.097 2.91.152 1.143.293 2.503.367 3.96z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_02;
