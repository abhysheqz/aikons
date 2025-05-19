import React from "react";
const TouchInteraction_02: React.FC<
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
        d="M2.25 2.188c0-.518.437-.938.975-.938h17.55c.539 0 .975.42.975.938v5.625c0 .517-.436.937-.975.937h-3.9V6.875H19.8v-3.75H4.2v3.75h2.925V8.75h-3.9c-.538 0-.975-.42-.975-.937z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 6.5a2.25 2.25 0 0 1 4.501-.001l.003 4.751H17.5a3.25 3.25 0 0 1 3.25 3.25v5a3.25 3.25 0 0 1-3.25 3.25h-6.874L5.75 16.275a2.32 2.32 0 0 1-.004-2.877 2.27 2.27 0 0 1 3.278-.311l.002.001.723.632z"
      />
    </svg>
  );
};
export default TouchInteraction_02;
