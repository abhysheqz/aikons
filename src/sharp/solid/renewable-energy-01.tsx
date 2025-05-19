import React from "react";
const RenewableEnergy_01: React.FC<
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
        d="m14.533 2.045-2.18 3.488h4l-3.615 5.784-1.272-.795 2.18-3.489h-4l3.615-5.783z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.632 6.61c.21-.12.46-.245.74-.368L6.94 8.534h4L9.4 10.999l3.816 2.385 4.463-7.142q.348.168.694.37c2.593 1.45 4.377 3.964 4.377 6.888 0 2.244-1.407 4.405-3 5.841v3.41h-3.151l-.913-1.37c-1.43.407-3.521.734-5.407.053L9.4 22.75H6.25v-3.36l-5-3.5v-4.14h2.16c.69-2.445 2.44-4.146 4.222-5.14M7 11a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RenewableEnergy_01;
