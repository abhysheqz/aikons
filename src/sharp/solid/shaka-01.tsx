import React from "react";
const Shaka_01: React.FC<
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
        d="M9.457 3.282a2.53 2.53 0 0 1 3.098-.004 2.407 2.407 0 0 1 .336 3.507l-.75.85.034.002c.446.027.838.085 1.206.225a3.69 3.69 0 0 1 2.29 2.589c.09.381.09.774.05 1.21-.037.425-.118.945-.218 1.59l-.006.04-.589 3.06h4.342c1.36 0 2.5 1.076 2.5 2.45 0 1.373-1.14 2.449-2.5 2.449H7a4.75 4.75 0 0 1-4.75-4.75v-5.486a4.75 4.75 0 0 1 1.922-3.816z"
      />
    </svg>
  );
};
export default Shaka_01;
