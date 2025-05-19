import React from "react";
const RotateRight_01: React.FC<
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
        d="M8.8.789a7.17 7.17 0 0 1 5.094 1.417V.79h2v4.939h-4.5v-2h1.193a5.17 5.17 0 0 0-3.58-.95c-1.863.193-3.695 1.358-4.72 3.398L2.5 5.28C3.825 2.64 6.247 1.053 8.8.789"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.984 5.78c1.09-.625 2.52-.358 3.192.796.628 1.078.343 2.612-.83 3.284l-3.92 2.245c.885 1.537 1.784 4.089 1.075 6.85-.316 1.231-1.421 1.921-2.423 2.307-1.034.399-2.19.565-2.992.617-.443.028-1.04.028-1.51.02-.238-.002-.45-.008-.603-.012h-.014L7.804 23.25l-5.087-8.742L5.14 13.18l2.106-5.935.004-.01a2.36 2.36 0 0 1 2.555-1.48 2.346 2.346 0 0 1 1.963 2.751l-.177.934z"
      />
    </svg>
  );
};
export default RotateRight_01;
