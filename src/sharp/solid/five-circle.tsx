import React from "react";
const FiveCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M16 8V6H9.18l-1.4 7h2.134c.242-.246.604-.537.77-.632.336-.192.79-.368 1.316-.368 1.135 0 2 .788 2 2s-.865 2-2 2c-.942 0-1.424-.36-1.685-.659-.142-.162-.289-.463-.344-.583H7.909c.051.441.212.785.283.937l.016.034c.117.255.307.592.602.93C9.424 17.36 10.442 18 12 18c2.178 0 4-1.623 4-4s-1.822-4-4-4a4.5 4.5 0 0 0-1.643.314L10.82 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FiveCircle;
