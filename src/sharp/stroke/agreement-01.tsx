import React from "react";
const Agreement_01: React.FC<
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
        d="M2 6.997h3.906l.894-.998c.734-.913 1.819-1.232 2.803-.824l1.893.824M2 15.95h3.998l1.979 1.274c1.887 1.215 2.831 1.823 3.86 1.749l.144-.014c1.024-.123 1.826-.897 3.43-2.446l1.582-1.528"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.981 7.226h-2.975c-1.148-.693-2.461-2.482-4.96-2.216-.557.06-1.64.146-2.777 1.275l-1.797 1.88c-.354.422-.85 1.508 0 2.467.849.96 1.977.25 2.435-.226l1.131-.92 5.408 6.455a.1.1 0 0 0 .076.036h3.482"
      />
    </svg>
  );
};
export default Agreement_01;
