import React from "react";
const Wardrobe_04: React.FC<
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
        d="M2 5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-3 3.874V22a1 1 0 1 1-2 0v-1H7v1a1 1 0 1 1-2 0v-1.126A4 4 0 0 1 2 17zm4 14h5.25v-2.25H4V17a2 2 0 0 0 2 2M6 3a2 2 0 0 0-2 2v10.25h7.25V3zm9 6.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-6-2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_04;
