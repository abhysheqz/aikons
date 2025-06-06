import React from "react";
const Promotion: React.FC<
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
        d="M7.5 12.5v-6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.952 13.022 1.754 3.499a2 2 0 0 0 .699.78l2.506 1.63a.1.1 0 0 1 .016.154l-2.904 2.886a.1.1 0 0 1-.148-.007L7.442 19.06a2 2 0 0 1-.467-1.284v-4.753m.532-6.525H5a2 2 0 0 0-2 2v1.988a2 2 0 0 0 2 2h2.507l9.212 3.98c.761.33 1.661.166 2.177-.483 1.398-1.76 2.104-3.742 2.104-7-.201-2.508-.867-4.383-2.09-5.969-.499-.647-1.387-.802-2.138-.48z"
      />
    </svg>
  );
};
export default Promotion;
