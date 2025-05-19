import React from "react";
const Notion_02: React.FC<
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
        d="M16.447 1.752a.75.75 0 0 1 .439.105l5 3a.75.75 0 0 1 .364.643v14a.75.75 0 0 1-.65.743l-15 2a.75.75 0 0 1-.686-.274l-4-5a.75.75 0 0 1-.164-.469v-13a.75.75 0 0 1 .697-.748zm-9.72 3.981 12.334-.822-2.744-1.646-11.76.84zM5.75 6.875 3.25 5v11.237l2.5 3.125zm12.8 2.574a.75.75 0 1 0-.1-1.497l-.994.066-.013.001-1.227.082a.75.75 0 0 0 .1 1.497l.434-.03v5.15l-4.431-6.01a.75.75 0 0 0-.654-.304l-.709.047-.013.001-1.493.1a.75.75 0 0 0 .1 1.497l.7-.047v7.242l-.849.113a.75.75 0 1 0 .198 1.487l2.97-.396a.75.75 0 0 0-.198-1.487l-.62.083v-6.58l5.145 6.981A.75.75 0 0 0 18.25 17V9.47z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notion_02;
