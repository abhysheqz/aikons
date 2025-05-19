import React from "react";
const FlipPhone: React.FC<
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
        d="M6.75 2.25a1 1 0 0 0-2 0V15.5a7.25 7.25 0 1 0 14.5 0V8.948c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08H7.35c-.283 0-.424 0-.512-.088s-.088-.23-.088-.512zm.822 5.42c-.072.16-.072.36-.072.759V9c0 .464 0 .697.04.891.217 1.07 1.296 1.909 2.671 2.078C10.462 12 11.404 12 12 12s1.539 0 1.789-.03c1.375-.17 2.454-1.01 2.671-2.079.04-.194.04-.427.04-.891v-.571c0-.4 0-.599-.072-.76-.13-.287-.42-.512-.79-.613C15.434 7 15.177 7 14.664 7H9.337c-.513 0-.77 0-.976.056-.37.1-.66.326-.789.614M11 17.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlipPhone;
