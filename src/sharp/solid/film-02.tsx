import React from "react";
const Film_02: React.FC<
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
        d="M1.75 21.274c0 .539.437.976.976.976h18.548c.539 0 .976-.437.976-.976V2.726a.976.976 0 0 0-.976-.976H2.726a.976.976 0 0 0-.976.976zM16 20.297H8V13h8zM16 11V3.702H8V11zM3.702 17H6v-2H3.702zm0-10H6v2H3.702zM18 17h2.298v-2H18zm0-8h2.298V7H18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Film_02;
