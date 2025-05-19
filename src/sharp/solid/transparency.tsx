import React from "react";
const Transparency: React.FC<
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
        d="M2.845 7.906a6.253 6.253 0 0 0 4.405 7.096V15c0-.813.125-1.596.357-2.332zm.516-1.605 4.889 4.888a7.8 7.8 0 0 1 2.94-2.939L6.3 3.361a6.28 6.28 0 0 0-2.939 2.94m4.545-3.456 4.762 4.762A7.8 7.8 0 0 1 15 7.25h.002a6.253 6.253 0 0 0-7.096-4.405m7.34 5.91a6.4 6.4 0 0 0-1.34.09l1.249 1.249a6.3 6.3 0 0 0 .09-1.34m-.607 2.944L12.3 9.361a6.28 6.28 0 0 0-2.94 2.94l2.338 2.338a6.28 6.28 0 0 0 2.94-2.94m-4.545 3.456-1.249-1.249a6.3 6.3 0 0 0-.09 1.34 6.4 6.4 0 0 0 1.339-.091M1.25 9a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.934 18.19A7.751 7.751 0 1 0 18.188 7.934q.06.526.061 1.065a9.25 9.25 0 0 1-10.315 9.19"
      />
    </svg>
  );
};
export default Transparency;
