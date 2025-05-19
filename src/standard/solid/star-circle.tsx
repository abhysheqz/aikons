import React from "react";
const StarCircle: React.FC<
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
        d="M12.75 2C6.813 2 2 6.813 2 12.75S6.813 23.5 12.75 23.5 23.5 18.687 23.5 12.75 18.687 2 12.75 2m1.181 5.698c-.5-.93-1.863-.93-2.363 0l-1.236 2.303-2.701.409c-1.033.156-1.556 1.436-.727 2.225l1.911 1.82-.42 2.53c-.187 1.13 1.013 1.812 1.91 1.378l2.445-1.182 2.445 1.182c.896.434 2.096-.248 1.909-1.378l-.42-2.53 1.912-1.82c.828-.79.305-2.069-.727-2.225L15.167 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StarCircle;
