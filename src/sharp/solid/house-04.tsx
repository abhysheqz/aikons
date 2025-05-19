import React from "react";
const House_04: React.FC<
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
        d="M3.25 15.096V20.5h1.5v-5.404c.368-.157.677-.421.91-.732.378-.504.59-1.165.59-1.864s-.212-1.36-.59-1.864S4.703 9.75 4 9.75s-1.283.382-1.66.886c-.379.504-.59 1.165-.59 1.864s.211 1.36.59 1.864c.232.31.542.575.91.732"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.25 21.25h-20v-1.5h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.531 9.86V20.5h3.5v-6a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v6h3.5V9.86l.281.226.937-1.172-7.5-6a.75.75 0 0 0-.937 0l-7.5 6 .937 1.172zm5 5.39v5.25h3.5v-5.25zm.75-6h2v-1.5h-2zm2 1.5h-2v1.5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_04;
