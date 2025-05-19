import React from "react";
const Pin: React.FC<
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
        d="M9.207 14.793a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414-1.414l5.5-5.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.064 3.1c.308-.514.893-.882 1.566-.822 1.406.124 2.624.667 3.524 1.567s1.443 2.118 1.567 3.524c.06.673-.308 1.257-.822 1.566l-3.91 2.346a.25.25 0 0 0-.117.263l.282 1.408a6.75 6.75 0 0 1-1.54 5.769l-.847.969a1.75 1.75 0 0 1-2.555.085l-7.988-7.989a1.75 1.75 0 0 1 .084-2.554l.965-.845a6.75 6.75 0 0 1 5.77-1.542l1.412.282a.25.25 0 0 0 .263-.117z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pin;
