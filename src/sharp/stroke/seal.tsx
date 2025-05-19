import React from "react";
const Seal: React.FC<
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
        strokeWidth={1.5}
        d="M8.98 4.997h-3.9a.1.1 0 0 0-.1.1v3.897l-2.95 2.94a.1.1 0 0 0 0 .143l2.95 2.928v3.917a.1.1 0 0 0 .1.1h3.903l2.961 2.949a.1.1 0 0 0 .142 0l2.934-2.948h3.909a.1.1 0 0 0 .1-.1v-3.91l2.942-2.936a.1.1 0 0 0 0-.142l-2.946-2.937v-3.9a.1.1 0 0 0-.1-.101h-3.909L12.084 2.03a.1.1 0 0 0-.143 0z"
      />
    </svg>
  );
};
export default Seal;
