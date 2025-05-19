import React from "react";
const AiContentGenerator_02: React.FC<
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
        d="M1.25 1.25h19.5v14.866l-.282-.084-1.064-3.532h-2.308l-1.064 3.532-3.532 1.064v2.308l3.532 1.064.084.282H1.25zm14.5 5h-9.5v2.5h1.5v-1h2.5v6.5h-1v1.5h3.5v-1.5h-1v-6.5h2.5v1h1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.025 13.75h.45l.99 3.285 3.285.99v.45l-3.285.99-.99 3.285h-.45l-.99-3.285-3.285-.99v-.45l3.285-.99z"
      />
    </svg>
  );
};
export default AiContentGenerator_02;
