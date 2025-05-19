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
        d="M4.543 5.614C2.613 6.772 1.25 8.476 1.25 10.5v8h2v-4.05c.39.342.825.655 1.293.936C6.26 16.416 8.517 17.08 11 17.222v3.028h2v-3.028c2.483-.142 4.74-.806 6.457-1.836.468-.281.903-.594 1.293-.936v4.05h2v-8c0-2.024-1.363-3.728-3.293-4.886C17.512 4.447 14.874 3.75 12 3.75s-5.512.697-7.457 1.864"
      />
    </svg>
  );
};
export default Trampoline;
