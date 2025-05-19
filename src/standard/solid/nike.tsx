import React from "react";
const Nike: React.FC<
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
        d="m22.536 7.524-.002.002-.004.004-.013.014a10 10 0 0 1-.244.238c-.168.161-.417.393-.744.683-.654.58-1.619 1.39-2.874 2.32a52.4 52.4 0 0 1-10.862 6.173c-2.126.892-3.802 1.043-4.982.39-1.226-.68-1.594-2.036-1.559-3.346.037-1.331.481-2.831 1.136-4.173.654-1.34 1.557-2.6 2.576-3.415a.75.75 0 0 1 1.173.844c-.231.63-.425 1.34-.496 2.003-.074.68-.01 1.22.18 1.584.16.308.448.569 1.083.64.683.076 1.743-.076 3.325-.684l.002-.001 11.496-4.498a.75.75 0 0 1 .81 1.222"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Nike;
