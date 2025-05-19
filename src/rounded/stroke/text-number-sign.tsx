import React from "react";
const TextNumberSign: React.FC<
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
        d="M2 20V7.022C2 5.105 2 4 2.439 4c.521 0 .896.66 1.811 2.273l6.5 11.454C11.665 19.34 12.023 20 12.56 20 13 20 13 18.895 13 16.978V4M16 13h6M16.58 4.58c.775-.773 4.065-.773 4.84 0 .773.775.773 4.066 0 4.84-.775.774-4.065.774-4.84 0-.773-.774-.773-4.065 0-4.84"
      />
    </svg>
  );
};
export default TextNumberSign;
