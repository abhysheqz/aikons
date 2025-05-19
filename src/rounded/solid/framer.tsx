import React from "react";
const Framer: React.FC<
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
        d="M18 15.733a.747.747 0 0 0 .53-1.277L12.5 9h3.25c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56V4c0-.223-.01-.454-.058-.666a1.34 1.34 0 0 0-.352-.675 1.34 1.34 0 0 0-.674-.352A3 3 0 0 0 17 2.25H6a.75.75 0 0 0-.53 1.28L11.5 9H8.25c-1.414 0-2.121 0-2.56.438-.44.439-.44 1.144-.44 2.555v2.871c0 .554.231 1.084.638 1.461l4.391 4.393c.73.756 1.095 1.134 1.408 1.008s.313-.65.313-1.7V17.73c0-.941 0-1.411.293-1.703s.764-.293 1.707-.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Framer;
