import React from "react";
const WhatsappBusiness: React.FC<
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
        d="M12.002 1.248C6.064 1.248 1.25 6.062 1.25 12c0 1.901.415 3.561 1.289 5.113l-1.262 4.692a.75.75 0 0 0 .92.92l4.667-1.253c1.563.884 3.231 1.28 5.138 1.28 5.938 0 10.752-4.814 10.752-10.752S17.94 1.248 12.002 1.248M9 6.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3.768c1.646 0 2.982-1.398 2.982-2.917 0-.767-.34-1.524-.848-2.085a3 3 0 0 0-.242-.24q.125-.11.236-.23c.512-.551.854-1.3.854-2.07 0-1.5-1.318-2.958-2.982-2.958zm4.797 4.008c-.291.313-.66.492-1.03.492H9.75v-3h3.018c.801 0 1.482.75 1.482 1.458 0 .336-.158.732-.453 1.05m-1.03 1.992H9.75v3h3.018c.819 0 1.482-.727 1.482-1.417 0-.338-.16-.747-.46-1.077-.294-.325-.662-.506-1.022-.506"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WhatsappBusiness;
