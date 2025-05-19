import React from "react";
const MaterialAndTexture: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.77 4.994-3.455-1.331C13.167 3.22 12.594 3 12 3s-1.167.22-2.314.663L6.229 4.994C4.076 5.824 3 6.238 3 7s1.076 1.177 3.23 2.006l3.455 1.331c1.147.442 1.72.663 2.315.663.593 0 1.167-.22 2.314-.663l3.456-1.33C19.924 8.176 21 7.761 21 7s-1.076-1.177-3.23-2.006"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.5 9.505 1.27.49C19.925 10.823 21 11.237 21 12s-1.076 1.177-3.23 2.006l-3.456 1.332c-1.147.441-1.72.662-2.314.662s-1.168-.22-2.315-.662L6.23 14.006C4.076 13.177 3 12.762 3 12s1.076-1.176 3.23-2.006l1.27-.49M19 10.5 8.76 14.888M5 13.5l5.5-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.635 14.557 1.135.437C19.925 15.824 21 16.238 21 17s-1.076 1.177-3.23 2.006l-3.456 1.331C13.167 20.78 12.594 21 12 21s-1.168-.221-2.315-.663L6.23 19.006C4.076 18.176 3 17.762 3 17s1.076-1.177 3.23-2.006l1.135-.437"
      />
    </svg>
  );
};
export default MaterialAndTexture;
