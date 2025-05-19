import React from "react";
const Allah: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.992 10.007v6.005m-2.499-6.005v4.504a1.5 1.5 0 1 1-2.998 0m0 0V8.005m0 6.506v-4.504m0 4.504a1.5 1.5 0 1 1-2.998 0v-4.504s-2.5.5-2.5 3.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.046 4.48 2.882-2.43a.1.1 0 0 1 .128 0l2.91 2.43a.1.1 0 0 0 .063.023h4.374a.1.1 0 0 1 .1.1v4.369a.1.1 0 0 0 .023.064l2.424 2.89a.1.1 0 0 1 0 .128l-2.424 2.934a.1.1 0 0 0-.023.063v4.37a.1.1 0 0 1-.1.1h-4.384a.1.1 0 0 0-.064.024l-2.89 2.403a.1.1 0 0 1-.128 0l-2.88-2.403a.1.1 0 0 0-.065-.023H4.608a.1.1 0 0 1-.1-.1v-4.37a.1.1 0 0 0-.022-.064L2.06 12.054a.1.1 0 0 1 0-.128l2.424-2.89a.1.1 0 0 0 .023-.064v-4.37a.1.1 0 0 1 .1-.1h4.374a.1.1 0 0 0 .064-.023Z"
      />
    </svg>
  );
};
export default Allah;
