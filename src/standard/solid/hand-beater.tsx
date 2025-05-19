import React from "react";
const HandBeater: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.964 16.526a4.25 4.25 0 1 1 6.01 6.01.75.75 0 0 1-1.055-.006l-4.95-4.95a.75.75 0 0 1-.005-1.054"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.207 12.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.03 1.47a.75.75 0 0 0-1.173.144c-.777 1.295-1.675 2.09-2.718 2.649-1.805.967-3.655 2.338-4.434 4.478l-.91 2.503a.75.75 0 0 0 .175.786l2.5 2.5a.75.75 0 0 0 .786.175l2.503-.91c2.14-.778 3.512-2.629 4.479-4.434.558-1.043 1.355-1.942 2.648-2.718a.75.75 0 0 0 .144-1.173zM15 8.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandBeater;
