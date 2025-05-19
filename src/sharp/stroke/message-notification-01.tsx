import React from "react";
const MessageNotification_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.453 15.025h8.926m-8.926-5.01h5.455"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.834 5.507c0 1.936-1.554 3.506-3.471 3.506s-3.472-1.57-3.472-3.506C14.891 3.57 16.445 2 18.363 2s3.47 1.57 3.47 3.507Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.889 3.016C2.954 3.52-.491 11.579 3.63 18.022L2.158 21.8a.1.1 0 0 0 .125.131l4.198-1.38c1.886 1.324 8.47 1.578 10.783 0 2.575-1.46 4.994-3.79 4.53-9.636m-11.905-7.9q.243-.013.491-.013m-.491.014 2.764-.014"
      />
    </svg>
  );
};
export default MessageNotification_01;
