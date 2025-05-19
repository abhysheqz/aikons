import React from "react";
const Kite: React.FC<
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
        strokeWidth={1.5}
        d="M12 2C7.714 4.407 4 8 2 14c3-2 7-3 10 0 3-3 7-2 10 0-2-6-5.714-9.593-10-12ZM12 14c-2.012 1-3.52 1-4 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.672 14c1.399 3.203-2.284 5.5.233 8M12 14c3.5 0 2 5 5 5M12 14V2M10 7c.291-.264.667-.477 1.013-.636.366-.169.549-.253.987-.253s.621.084.987.253c.346.16.722.372 1.013.636"
      />
    </svg>
  );
};
export default Kite;
