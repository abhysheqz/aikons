import React from "react";
const HotPrice: React.FC<
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
        d="M11.686 1.319a.75.75 0 0 1 .8.11c2.695 2.3 4.749 4.47 6.133 6.511 1.384 2.04 2.131 3.998 2.131 5.86 0 5.417-4.16 8.95-8.75 8.95s-8.75-3.533-8.75-8.95c0-2.8 1.663-5.596 4.705-8.815a.75.75 0 0 1 1.287.406c.037.252.187.78.772 1.507.257-.298.482-.625.672-1.068.32-.747.564-1.885.564-3.83a.75.75 0 0 1 .436-.681m3.521 10.474a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0M10 12a1 1 0 1 0 0 2h.007a1 1 0 1 0 0-2zm3.993 4a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotPrice;
