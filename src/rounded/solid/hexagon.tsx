import React from "react";
const Hexagon: React.FC<
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
        d="M9.948 1.77c.703-.326 1.347-.52 2.051-.52s1.348.194 2.052.52l5.587 3.31c.628.46 1.11.933 1.458 1.552.348.618.505 1.279.58 2.063v6.61c-.075.784-.232 1.445-.58 2.063-.349.619-.83 1.091-1.458 1.553l-5.587 3.309c-.704.326-1.347.52-2.052.52-.704 0-1.348-.194-2.051-.52L4.36 18.92c-.628-.46-1.109-.933-1.457-1.552-.348-.618-.505-1.279-.58-2.063v-6.61c.075-.784.232-1.445.58-2.063s.83-1.091 1.457-1.553z"
      />
    </svg>
  );
};
export default Hexagon;
