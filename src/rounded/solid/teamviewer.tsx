import React from "react";
const Teamviewer: React.FC<
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
        d="M12.057 1.75h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.912-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43-1.343-.181-3.064-.181-5.255-.181m5.493 12.063c.942-.8 1.413-1.2 1.447-1.73a1 1 0 0 0 0-.167c-.034-.528-.505-.929-1.447-1.73-1.473-1.251-2.21-1.877-2.815-1.634a1 1 0 0 0-.178.09c-.42.265-.523.9-.549 2.056H9.992c-.026-1.156-.129-1.79-.55-2.055a1 1 0 0 0-.177-.091c-.606-.243-1.342.383-2.815 1.635-.942.8-1.413 1.2-1.447 1.73a1 1 0 0 0 0 .167c.034.528.505.929 1.447 1.73 1.473 1.251 2.21 1.877 2.815 1.634q.093-.037.178-.09c.432-.273.53-.938.55-2.16h4.013c.022 1.222.119 1.887.551 2.16q.085.053.178.09c.606.243 1.342-.383 2.815-1.635"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Teamviewer;
