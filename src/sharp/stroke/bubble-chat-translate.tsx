import React from "react";
const BubbleChatTranslate: React.FC<
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
        d="M8 8.245h4m0 0h2.572m-2.572 0V6.504m4 1.741h-1.428m0 0c-.47 1.698-1.451 3.303-2.572 4.713m0 0c-.928 1.168-1.951 2.203-2.857 3.046M12 12.958c-.571-.678-1.371-1.776-1.6-2.272m1.6 2.272 1.714 1.805"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 21.01c5.522 0 9.998-4.256 9.998-9.506S17.522 1.998 12 1.998s-9.998 4.256-9.998 9.506c0 2.678 1.162 5.01 3.004 6.79l-1 3.696a.01.01 0 0 0 .013.012l3.976-1.785c1.226.51 2.58.794 4.005.794Z"
      />
    </svg>
  );
};
export default BubbleChatTranslate;
