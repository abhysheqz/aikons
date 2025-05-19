import React from "react";
const Knives: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.061 3.938a1.6 1.6 0 0 0-2.198 0l-4.667 4.519-1.391-1.437 4.666-4.519a3.6 3.6 0 0 1 4.982 0 3.403 3.403 0 0 1 0 4.913 3.57 3.57 0 0 1-2.46 1.002L16.2 11.207l-1.414-1.414 3.109-3.109a1 1 0 0 1 .843-.284c.478.066.969-.08 1.322-.423a1.403 1.403 0 0 0 0-2.039"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.508 9.064c.635-.648.65-1.735.076-2.424l1.538-1.279c1.189 1.43 1.21 3.678-.185 5.102a3.67 3.67 0 0 1-2.619 1.11L18.214 12.7l-1.429-1.399 1.425-1.455a1 1 0 0 1 .858-.29 1.67 1.67 0 0 0 1.44-.492"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.97 6.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-1.28 1.28v3.69A2.75 2.75 0 0 1 15 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-3.586c0-.464.184-.909.513-1.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Knives;
