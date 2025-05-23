import React from "react";
const CursorProgress_01: React.FC<
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
        d="M15.25 3.15a3 3 0 0 0-.366.023.95.95 0 0 1-.23-1.886 5 5 0 0 1 1.193 0 .95.95 0 0 1-.23 1.886 3 3 0 0 0-.367-.023m-2.493-.199c.415.32.492.917.173 1.332a3 3 0 0 0-.362.619.946.946 0 0 1-1.244.498.95.95 0 0 1-.497-1.248 4.8 4.8 0 0 1 .601-1.027.945.945 0 0 1 1.329-.174m4.986 0a.945.945 0 0 1 1.329.174 4.8 4.8 0 0 1 .6 1.027.95.95 0 0 1-.496 1.248.946.946 0 0 1-1.244-.498 3 3 0 0 0-.362-.618.95.95 0 0 1 .173-1.333m1.433 3.65c.481.208.703.766.497 1.249a4.8 4.8 0 0 1-.601 1.027.945.945 0 0 1-1.329.173.95.95 0 0 1-.173-1.332 3 3 0 0 0 .362-.618.946.946 0 0 1 1.244-.498m-7.852.001a.946.946 0 0 1 1.244.498 3 3 0 0 0 .362.618.95.95 0 0 1-.173 1.333.945.945 0 0 1-1.328-.174 4.8 4.8 0 0 1-.602-1.027.95.95 0 0 1 .497-1.248m2.504 3.053a.95.95 0 0 1 1.056-.827 3 3 0 0 0 .732 0 .95.95 0 0 1 .23 1.886 5 5 0 0 1-1.193 0 .95.95 0 0 1-.825-1.059"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.169 11.243A6 6 0 0 1 9.69 3.74L7.234 1.568C6.45.875 5.2 1.384 5.144 2.44L4.25 18.873c-.06 1.124 1.266 1.743 2.095 1.003l3.363-3.004 2.068 5.095c.261.643.994.95 1.635.693l1.878-.756c.644-.258.958-.99.696-1.636l-2.104-5.183 4.775-.634c1.063-.141 1.478-1.467.669-2.184z"
      />
    </svg>
  );
};
export default CursorProgress_01;
