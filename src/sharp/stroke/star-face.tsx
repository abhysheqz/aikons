import React from "react";
const StarFace: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12m6.5-9.37A10 10 0 0 1 12 2c1.231 0 2.41.223 3.5.63"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.98 5.034c.03-.045.01-.045.04 0l1.044 1.798 1.867.46c.05.014.088.016.065.036l-.01.01-1.345 1.42.511 2.21.001.013c-.001.047-.056-.004-.105-.023l-2.04-.85-2.056.85c-.106.04-.113.056-.11.006v-.013l.508-2.195-1.315-1.402-.011-.01c-.015-.013-.048-.046.006-.06l1.909-.468zM16.98 5.034c.03-.045.01-.045.04 0l1.044 1.798 1.867.46c.05.014.087.016.065.036l-.01.01-1.345 1.42.511 2.21.002.013c-.002.047-.057-.004-.106-.023l-2.04-.85-2.056.85c-.106.04-.113.056-.11.006v-.013l.508-2.195-1.315-1.402-.011-.01c-.015-.013-.048-.046.006-.06l1.909-.468z"
      />
    </svg>
  );
};
export default StarFace;
