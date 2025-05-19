import React from "react";
const AiFile: React.FC<
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
        d="M17.025 13.75h.45l.99 3.285 3.285.99v.45l-3.285.99-.99 3.285h-.45l-.99-3.285-3.285-.99v-.45l3.285-.99z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.695 1.25h10.056v14.867l-.283-.085-1.064-3.532h-2.308l-1.065 3.532-3.531 1.064v2.308l3.531 1.064.689 2.284H2.254V8.676zm.62 1.5L3.755 9.298h6.562z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiFile;
