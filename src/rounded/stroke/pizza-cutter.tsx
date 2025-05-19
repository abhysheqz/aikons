import React from "react";
const PizzaCutter: React.FC<
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
        strokeWidth={2}
        d="M18.008 7.006 18.002 7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.828 9.828a4 4 0 1 1-5.656-5.656 4 4 0 0 1 5.656 5.656Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.84 20.203c1.12 1.063 2.935 1.063 4.055 0a2.64 2.64 0 0 0 .838-2.02.63.63 0 0 1 .182-.487l2.746-2.605a.6.6 0 0 1 .646-.1c1.037.428 2.299.339 3.309.114.501-.112.503-.74.056-.983a8 8 0 0 1-1.694-1.23 7.6 7.6 0 0 1-1.55-2.065c-.405-.792-1.576-1.126-2.231-.504L2.84 16.356a2.623 2.623 0 0 0 0 3.848Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14 8.5-2.5 2m4.5.5-2.5 2"
      />
    </svg>
  );
};
export default PizzaCutter;
