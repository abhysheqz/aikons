import React from "react";
const Lollipop: React.FC<
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
      <circle cx={12} cy={8} r={6} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 14v8M6 7.966C7 6.5 9 5.669 10.286 6.123c1.475.52 1.741 2.258 3.214 2.784 1.5.536 2-1.437 4.5-.972"
      />
    </svg>
  );
};
export default Lollipop;
