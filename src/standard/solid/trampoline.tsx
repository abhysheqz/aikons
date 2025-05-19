import React from "react";
const Trampoline: React.FC<
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
        d="M12 3.25c-2.874 0-5.512.697-7.457 1.864C2.613 6.272 1.25 7.976 1.25 10q0 .15.01.296v7.634a.976.976 0 1 0 1.953 0v-4.013c.4.355.847.679 1.33.969 1.722 1.033 3.988 1.698 6.48 1.837v3.16a.976.976 0 0 0 1.953 0v-3.16c2.492-.139 4.759-.804 6.48-1.837.484-.29.932-.614 1.332-.97v4.014a.976.976 0 1 0 1.952 0v-7.634a5 5 0 0 0 .01-.296c0-2.024-1.363-3.728-3.293-4.886C17.512 3.947 14.874 3.25 12 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Trampoline;
