import React from "react";
const PropertyEdit: React.FC<
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
        d="M20 13.25a.75.75 0 0 1 .53.22l2.5 2.5a.75.75 0 0 1 0 1.06l-5.72 5.72h-3.56v-3.56l5.72-5.72a.75.75 0 0 1 .53-.22M1.5 1.25A.75.75 0 0 0 .75 2v4.25h19.5V2a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 7.75H.75V20c0 .414.336.75.75.75h10.75v-2.182l6.16-6.159a2.25 2.25 0 0 1 1.84-.645zM7.5 13h-2v-1.5h2zm8 0h-6v-1.5h6zm-8 4h-2v-1.5h2zm5 0h-3v-1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyEdit;
