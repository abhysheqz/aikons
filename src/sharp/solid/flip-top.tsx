import React from "react";
const FlipTop: React.FC<
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
        d="M20.775 22.75a.976.976 0 0 0 .975-.977v-2.932H19.8v1.955h-1.95v1.954zm-.975-7.818v1.955h1.95v-1.955zm-6.825 7.818h2.924v-1.954h-2.924zm-4.874 0h2.924v-1.954H8.101zm-4.876 0H6.15v-1.954H4.205l.01-1.95-1.949-.01-.016 2.932a.98.98 0 0 0 .975.982m-.975-7.818v1.955H4.2v-1.955z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.748 2.227a.976.976 0 0 0-.975-.977H3.233a.976.976 0 0 0-.975.976l-.008 10.75h19.498z"
      />
    </svg>
  );
};
export default FlipTop;
