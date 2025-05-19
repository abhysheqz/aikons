import React from "react";
const Adzan: React.FC<
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
        d="m22.75 13.707-2 2-1.414-1.414 2-2zm-1.414 7-2-2 1.414-1.414 2 2zM2.664 12.293l2 2-1.414 1.414-2-2zm-1.414 7 2-2 1.414 1.414-2 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.472 1.631-.471-.381-.472.381c-.433.35-1.003.708-1.668 1.125q-.326.204-.68.43c-.921.588-1.933 1.278-2.75 2.11-.82.838-1.49 1.866-1.647 3.135-.108.881.038 1.818.476 2.819h13.48c.438-1 .584-1.938.476-2.819-.156-1.269-.826-2.297-1.646-3.134-.817-.833-1.828-1.523-2.75-2.112l-.68-.43c-.665-.416-1.235-.773-1.668-1.124"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 12.75H5.75v10h12.5zm-5.25 7v-4h-2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Adzan;
