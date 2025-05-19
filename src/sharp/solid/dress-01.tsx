import React from "react";
const Dress_01: React.FC<
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
        d="M21.53 7.129a.74.74 0 0 0 .034-1.018l-3.676-4.176-4.138-.685v.88c0 .96-.784 1.739-1.75 1.739s-1.75-.779-1.75-1.74V1.25l-4.138.685-3.676 4.176a.74.74 0 0 0 .034 1.018l2.5 2.485a.75.75 0 0 0 .98.07l.952-.71.266 2.348h9.664l.266-2.348.952.71a.754.754 0 0 0 .98-.07zM17.81 12.813H6.19c-.265.335-.548.732-.83 1.193-1.065 1.736-2.11 4.37-2.11 7.999v.745h17.5v-.745c0-3.628-1.045-6.262-2.11-8a12 12 0 0 0-.83-1.192"
      />
    </svg>
  );
};
export default Dress_01;
