import React from "react";
const Tick_03: React.FC<
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
        d="M11.474 17.306c3.013-3.224 5.922-5.411 9.576-8.508 1.094-.927 1.263-2.552.405-3.703-.912-1.224-2.645-1.469-3.817-.496-3.347 2.776-5.951 5.45-8.421 8.306-.13.15-.195.225-.262.267a.52.52 0 0 1-.555.003c-.068-.041-.133-.115-.263-.262l-1.316-1.49a2.748 2.748 0 0 0-4.358.304 2.79 2.79 0 0 0 .253 3.406l2.064 2.29C6.323 19.135 7.095 19.992 8.022 20c.926.008 1.768-.892 3.452-2.694"
      />
    </svg>
  );
};
export default Tick_03;
