import React from "react";
const Medal_02: React.FC<
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
        d="M8 5.001v2m4-2v3m4-3v2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.003 12.501 3.09 7.985 3 2.46c0-.056.04-.345.09-.345L20.9 2a.1.1 0 0 1 .1.1v5.884zM11.926 13.17a.1.1 0 0 1 .166 0l1.68 2.5 2.892.67a.1.1 0 0 1 .056.159l-1.845 2.39.147 3.005a.1.1 0 0 1-.133.1l-2.88-1.01-2.834 1.007a.1.1 0 0 1-.133-.1l.189-3.002-1.97-2.388a.1.1 0 0 1 .055-.161l2.929-.67z"
      />
    </svg>
  );
};
export default Medal_02;
