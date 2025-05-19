import React from "react";
const Translation: React.FC<
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
        d="M7.4 5.716H5v1.5h4.182c-.256.577-.59 1.143-.971 1.688l-.109-.148c-.237-.329-.4-.587-.457-.71l-1.36.634c.123.265.365.626.6.953.118.163.243.33.369.491a23 23 0 0 1-1.787 1.824l1.016 1.104a25 25 0 0 0 1.778-1.801l.773.803 1.082-1.04-.902-.937c.64-.866 1.213-1.83 1.583-2.861H12v-1.5H8.9V4.5H7.4z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M16.127 15.75h-1.252l.626-1.878z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.47 1.47A.75.75 0 0 1 2 1.25h15a.75.75 0 0 1 .75.75v4.25H22a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-4.25H2a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53m14.78 5.22V2.75H2.75v13.5h3.94zm.291 5.56H14.46l-2.17 6.513 1.422.474.662-1.987h2.253l.662 1.987 1.423-.474z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Translation;
