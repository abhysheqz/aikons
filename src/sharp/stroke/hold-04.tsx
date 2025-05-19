import React from "react";
const Hold_04: React.FC<
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
        strokeWidth={1.5}
        d="M7.628 12.2V6.693c0-.857.708-1.48 1.544-1.48h.048c.836 0 1.48.678 1.48 1.536v1.98m0-1.875v-.605c0-.858.71-1.549 1.547-1.549h.052c.834 0 1.488.693 1.49 1.549l.013 2.837m0-.274.015-1.505c0-.858.692-1.605 1.528-1.605h.048c.836 0 1.511.694 1.511 1.552v2.454-1.344c0-.858.666-1.647 1.502-1.647h.087c.835 0 1.503.674 1.503 1.531v5.554c0 2.823-.036 3.457-1.162 4.71-.71.788-1.75 1.188-2.812 1.188H8.515c-1.766-2.5-4.54-5.959-4.518-7-.043-1.483 1.069-2.603 3.408-4.836"
      />
    </svg>
  );
};
export default Hold_04;
