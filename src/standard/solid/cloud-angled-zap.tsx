import React from "react";
const CloudAngledZap: React.FC<
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
        d="M12.996 13.132a1 1 0 0 1 .372 1.364L12.223 16.5H13.5a1 1 0 0 1 .869 1.496l-2 3.5a1 1 0 0 1-1.737-.992l1.145-2.004H10.5a1 1 0 0 1-.868-1.496l2-3.5a1 1 0 0 1 1.364-.372"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 13a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 18.75h-1.835l.006-.01a2.5 2.5 0 0 0-1.023-3.46l.023-.04a2.5 2.5 0 0 0-4.342-2.48l-2 3.5a2.5 2.5 0 0 0 .006 2.49H7A5.75 5.75 0 0 1 1.25 13"
      />
    </svg>
  );
};
export default CloudAngledZap;
