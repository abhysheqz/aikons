import React from "react";
const StarSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm8.681 5.198c-.5-.93-1.863-.93-2.363 0L9.832 9.501l-2.701.409c-1.033.156-1.556 1.436-.727 2.225l1.911 1.82-.42 2.53c-.187 1.13 1.013 1.812 1.91 1.378l2.445-1.182 2.445 1.182c.896.434 2.096-.248 1.909-1.378l-.42-2.53 1.912-1.82c.828-.79.305-2.069-.727-2.225L14.667 9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StarSquare;
