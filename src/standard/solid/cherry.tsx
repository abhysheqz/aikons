import React from "react";
const Cherry: React.FC<
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
        d="M10.25 16.5a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.861 1.492a1 1 0 0 1-.353 1.37c-.906.534-1.5 1.113-1.878 1.688-.8 1.215-.772 2.633-.255 4.078.52 1.454 1.496 2.802 2.343 3.676a1 1 0 0 1-1.436 1.392c-.99-1.022-2.15-2.606-2.79-4.394-.414-1.157-.625-2.453-.386-3.743-.778.316-1.593.752-2.29 1.333-1.263 1.056-2.143 2.583-1.7 4.922a1 1 0 0 1-1.964.372c-.6-3.161.654-5.384 2.382-6.828 1.512-1.264 3.378-1.934 4.667-2.249.558-.733 1.316-1.395 2.29-1.97a1 1 0 0 1 1.37.353"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.429 10.64A7.73 7.73 0 0 0 8.75 16.5c0 1.725.564 3.318 1.517 4.606a6.25 6.25 0 1 1 1.162-10.467"
      />
    </svg>
  );
};
export default Cherry;
