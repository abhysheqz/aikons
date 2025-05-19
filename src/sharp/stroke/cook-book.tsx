import React from "react";
const CookBook: React.FC<
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
        d="M3.517 19.099V6.156c-.171-2.863.968-3.941 2.88-4.155h14.088V16l-2 .01M3.517 19.099c0 1.653 1.322 2.9 2.974 2.9h11.994m-14.968-2.9c0-1.654 1.322-3.09 2.974-3.09h11.994m0 0V22m2.016 0h-2.016"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.893 6.404c.622-.592 1.591-.385 1.963-.203 1.076.525 1.242 1.659 1.109 2.18-.15 1.048-1.144 1.627-1.865 1.655a.106.106 0 0 0-.104.104v2.87H9.013v-2.76a.106.106 0 0 0-.112-.103c-1.364.067-2.285-1.624-1.768-2.853.636-1.514 2.11-1.463 2.874-1.028a.11.11 0 0 0 .151-.045c.707-1.42 2.002-1.26 2.366-1.144.851.279 1.215.79 1.37 1.327Zm0 0c.107.372.114.757.114 1.087"
      />
    </svg>
  );
};
export default CookBook;
