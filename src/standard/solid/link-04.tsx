import React from "react";
const Link_04: React.FC<
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
        d="M13.023 4.424c1.824-1.899 4.8-1.899 6.625 0 1.803 1.877 1.803 4.904 0 6.78l-3.24 3.372a4.7 4.7 0 0 1-.927.748l-.457-.744.457.744a4.56 4.56 0 0 1-5.698-.748 4.8 4.8 0 0 1-.636-.826 1 1 0 0 1 1.707-1.042q.156.257.371.482l-.72.693.72-.693a2.56 2.56 0 0 0 3.21.43q.282-.172.531-.43l3.24-3.371c1.059-1.103 1.059-2.906 0-4.009a2.564 2.564 0 0 0-3.741 0l-.714.743a1 1 0 0 1-1.442-1.386z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.592 9.424c1.825-1.899 4.8-1.899 6.625 0q.368.385.636.826a1 1 0 1 1-1.706 1.042 2.8 2.8 0 0 0-.372-.482 2.565 2.565 0 0 0-3.741 0l-3.24 3.371c-1.059 1.103-1.059 2.906 0 4.009a2.565 2.565 0 0 0 3.741 0l.714-.743a1 1 0 0 1 1.442 1.386l-.713.743a4.564 4.564 0 0 1-6.626 0c-1.803-1.877-1.803-4.904 0-6.78z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_04;
