import React from "react";
const SquareSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM16.25 7C14.948 7 14 8.106 14 9.333a1 1 0 1 0 2 0c0-.245.172-.333.25-.333s.25.087.25.333c0 .13-.058.233-.125.286l-2 1.6A1 1 0 0 0 15 13h2.5a1 1 0 0 0 .284-1.96 2.38 2.38 0 0 0 .716-1.707C18.5 8.106 17.552 7 16.25 7M7 10a1 1 0 1 0 0 2h.5c.036 0 .092.012.147.045a.2.2 0 0 1 .083.079l.612 1.274-.734 1.018A1.37 1.37 0 0 1 6.5 15a1 1 0 1 0 0 2 3.37 3.37 0 0 0 2.732-1.416l.095-.133.14.29C9.852 16.546 10.698 17 11.5 17h.5a1 1 0 1 0 0-2h-.5a.3.3 0 0 1-.148-.045.2.2 0 0 1-.082-.079l-.612-1.274.734-1.018A1.37 1.37 0 0 1 12.5 12a1 1 0 1 0 0-2 3.37 3.37 0 0 0-2.732 1.416l-.095.133-.14-.29C9.148 10.454 8.302 10 7.5 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareSquare;
