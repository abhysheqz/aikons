import React from "react";
const ThirdBracket: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 21c1.232 0 2.231-1.151 2.231-2.571 0-2.248-.1-3.742 1.442-5.52.436-.502.436-1.316 0-1.818-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571 0-2.248.1-3.742-1.442-5.52-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57 3.769 4.151 4.768 3 6 3"
      />
    </svg>
  );
};
export default ThirdBracket;
