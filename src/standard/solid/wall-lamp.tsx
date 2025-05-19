import React from "react";
const WallLamp: React.FC<
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
        d="M14.5 2a1 1 0 1 0-2 0h-.382a2.08 2.08 0 0 0-1.777 1.026 18 18 0 0 1-1.199 1.743c-.49.622-.919 1.052-1.189 1.213a2.2 2.2 0 0 0-.6.526c-.1.13-.2.296-.268.492H7a1 1 0 0 0 0 2h.252l2.141 7.28a1.93 1.93 0 0 0 1.355 1.332c.413.108 1.043.25 1.752.33v1.107c0 .66-.735 1.177-1.437.853l-.03-.013L5 17.337V14a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-2.491l5.241 2.216c1.949.886 4.26-.48 4.26-2.676v-1.107a12.6 12.6 0 0 0 1.75-.33 1.93 1.93 0 0 0 1.356-1.331L19.748 9H20a1 1 0 1 0 0-2h-.085a1.7 1.7 0 0 0-.268-.492 2.2 2.2 0 0 0-.6-.526c-.27-.161-.7-.591-1.189-1.213a18 18 0 0 1-1.2-1.743A2.08 2.08 0 0 0 14.883 2zm1.196 13.69c-.315.08-.736.174-1.196.237V9h3.163zm-3.196.237V9H9.336l1.968 6.69c.315.08.736.174 1.196.237"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WallLamp;
