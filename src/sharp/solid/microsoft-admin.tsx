import React from "react";
const MicrosoftAdmin: React.FC<
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
        d="M12 1.242s-.935.56-1.145.672c-.42.222-1.033.526-1.794.845-1.528.64-3.623 1.33-5.933 1.56l-.878.086v6.672c0 4.045 2.453 6.95 4.75 8.784a20 20 0 0 0 4.224 2.566c.128.057.776.315.776.315s.648-.258.776-.315a20.01 20.01 0 0 0 4.223-2.566c2.298-1.834 4.751-4.74 4.751-8.784V4.405l-.878-.087c-2.31-.229-4.405-.918-5.933-1.559a22 22 0 0 1-1.794-.845A56 56 0 0 1 12 1.242m0 19.412a18.065 18.065 0 0 0 3.776-2.298c1.886-1.506 3.645-3.615 3.97-6.365H12V3.497c-.464.245-1.356.697-2.18 1.042-1.45.609-3.411 1.273-5.62 1.595v4.943q0 .468.054.914H12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MicrosoftAdmin;
