import React from "react";
const AlignKeyObject: React.FC<
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
        d="M6 3h12v2H6zM3 18V6h2v12zM21 6v6h-2V6zM10 21H6v-2h4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M20.75 14.293a1 1 0 0 0-1.415 0l-4.076 4.073a2.25 2.25 0 1 0 1.416 1.413l1.38-1.38.794.764 1.386-1.442-.765-.735.572-.572 1.293 1.293 1.414-1.414z"
      />
    </svg>
  );
};
export default AlignKeyObject;
