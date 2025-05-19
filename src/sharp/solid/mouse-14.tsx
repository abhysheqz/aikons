import React from "react";
const Mouse_14: React.FC<
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
        d="M13.9 3.55a.75.75 0 0 1 1.042-.157l5.084 3.58L21.58 5.03l1.171.937-2 2.5a.75.75 0 0 1-1.027.138l-5.066-3.565-1.056 1.409-1.2-.9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.185 5.354c-2.317-1.315-4.351-1.399-6.112-.55-1.7.818-3.017 2.446-4.088 4.27-1.07 1.822-1.85 3.76-1.72 5.625.134 1.938 1.234 3.633 3.55 4.947 2.317 1.315 4.351 1.399 6.113.55 1.7-.818 3.016-2.446 4.087-4.27 1.07-1.822 1.85-3.76 1.721-5.625-.134-1.938-1.235-3.633-3.55-4.947M10.7 7.4l-1.5 2 1.6 1.2 1.5-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_14;
