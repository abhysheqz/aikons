import React from "react";
const Wechat: React.FC<
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
        d="M16 8.75c-4.145 0-8.25 2.871-8.25 7.25q.001.8.175 1.53A9.5 9.5 0 0 1 6.24 17a.3.3 0 0 0-.183-.024l-3.914.76a.75.75 0 0 1-.86-.955l.932-3.05a.34.34 0 0 0-.044-.264A7 7 0 0 1 1.25 10c0-4.371 4.015-7.75 8.75-7.75 4.426 0 8.222 2.952 8.7 6.906A9.3 9.3 0 0 0 16 8.75M7 5a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zm5.991 0a1 1 0 1 0 0 2H13a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 10.25c-3.594 0-6.75 2.452-6.75 5.75s3.156 5.75 6.75 5.75c1 0 1.952-.185 2.81-.52a.34.34 0 0 1 .184-.024l2.87.532a.75.75 0 0 0 .85-.967l-.652-2.03c-.02-.062-.019-.169.053-.3A5.04 5.04 0 0 0 22.75 16c0-3.298-3.156-5.75-6.75-5.75m-2 3.25a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm3.991 0a1 1 0 0 0 0 2H18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wechat;
