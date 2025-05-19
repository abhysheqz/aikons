import React from "react";
const Kaaba_01: React.FC<
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
        d="M12.968 1.351a1.75 1.75 0 0 0-.936 0l-8 2.222A1.75 1.75 0 0 0 2.75 5.26v3.152l.571-.14.016-.004 8.784-1.952a2 2 0 0 1 .13-.024.75.75 0 0 1 .495 0q.065.01.13.023c1.097.244 6.19 1.374 9.374 2.084V5.26a1.75 1.75 0 0 0-1.282-1.686z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.25 9.935c-2.714-.606-7.11-1.582-9-2.001v2.464l.313.07a.75.75 0 0 1-.313 1.466V22.75h8.25a.75.75 0 0 0 .75-.75v-8.162l-2.232-.4a.75.75 0 1 1 .264-1.476l1.968.352zm-5.987 1.132a.75.75 0 0 0-.326 1.464l.9.2a.75.75 0 1 0 .326-1.464zM11.75 22.75V11.933a.75.75 0 0 1-.313-1.467l.313-.07V7.935L3.67 9.73l-.92.226V12.4l1.937-.433a.75.75 0 1 1 .326 1.464l-2.263.506v8.062c0 .415.336.75.75.75zM9.063 12.53a.75.75 0 1 0-.326-1.464l-.9.2a.75.75 0 0 0 .326 1.464z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2h-20a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kaaba_01;
