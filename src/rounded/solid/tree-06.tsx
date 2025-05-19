import React from "react";
const Tree_06: React.FC<
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
        d="M12.002 1.252a3.75 3.75 0 0 0-3.347 2.057 3.75 3.75 0 0 0-4.31 4.53 4.251 4.251 0 0 0 .956 7.741c.293 1.778 1.83 3.172 3.701 3.172h2.248v-5.441l-2.28-2.28a.75.75 0 1 1 1.06-1.061l1.22 1.22V9a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.28 2.28v3.442h2.252c1.872 0 3.408-1.394 3.7-3.172a4.251 4.251 0 0 0 .956-7.741q.093-.406.094-.837a3.75 3.75 0 0 0-4.403-3.693 3.75 3.75 0 0 0-3.347-2.057"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 18.752v2.498H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-2.498z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_06;
