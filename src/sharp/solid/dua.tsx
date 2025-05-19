import React from "react";
const Dua: React.FC<
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
        d="M12.5 16v5.5h4l6-6.5V6.5h-1a2 2 0 0 0-2 2v4.955l-2.25 2.25-.75-.75 2.096-2.095a2.14 2.14 0 0 0-2.992.036zM11.5 16v5.5h-4l-6-6.5V6.5h1a2 2 0 0 1 2 2v4.955l2.25 2.25.75-.75-2.096-2.095a2.14 2.14 0 0 1 2.992.036zM10 6.126c0-.81.431-1.521 1.082-1.913L10.05 2.5a4.23 4.23 0 1 0 5.807 5.807l-1.713-1.032A2.23 2.23 0 0 1 10 6.126M14 3.356a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default Dua;
