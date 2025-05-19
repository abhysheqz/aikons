import React from "react";
const BriefcaseDollar: React.FC<
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
        d="M19.5 6h-15a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.377-2.641a1 1 0 0 0-.99-.859H9.867a1 1 0 0 0-.99.859L8.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11.5c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2 .672 2 1.5-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M12 11.5v-1m0 7c-.87 0-1.612-.417-1.886-1m1.886 1v1M6 11.5H2.5M21.5 11.5H18"
      />
    </svg>
  );
};
export default BriefcaseDollar;
