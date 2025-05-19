import React from "react";
const DiscountTag_01: React.FC<
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
        d="M13.43 5.672a1.75 1.75 0 0 0-1.511.492l-7.915 7.932a1.75 1.75 0 0 0 .002 2.473l5.586 5.586a1.75 1.75 0 0 0 2.475 0l7.927-7.931a1.75 1.75 0 0 0 .486-1.536l-.948-5.47a.75.75 0 0 0-.57-.603l-.946-.22-.053-.01zm-2.102 5.017a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2zM8.83 13.831a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2zm2.5 3.103a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.145 3.484c.662-.257 1.142-.158 1.507.072.403.256.765.742.982 1.399.454 1.375.117 2.884-.874 3.545a1 1 0 1 0 1.11 1.664c2.005-1.338 2.284-3.954 1.663-5.836-.32-.972-.919-1.897-1.812-2.462-.932-.59-2.084-.72-3.306-.244l-4.452 1.78a1.35 1.35 0 0 1-.81.03 1.44 1.44 0 0 1-.625-.316A1 1 0 0 0 6.13 4.548c.727.708 2.188 1.252 3.562.716z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiscountTag_01;
