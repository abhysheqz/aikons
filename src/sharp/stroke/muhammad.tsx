import React from "react";
const Muhammad: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.584 10.516c-.43-.547-.539-1.16-.4-1.72.17-.693.77-.956 1.433-.7.83.322.97 1.431.167 1.817-.374.18-.78.382-1.2.603Zm0 0c-.532.279-1.088.587-1.63.914l4.546.914c-2.121.304-6.364 1.37-4.546 3.656-1.677-.843-2.15-1.41-2.267-2.742m0 0c-.072-.834-.005-1.968-.005-3.656m.005 3.656c-.608.762-2.096 1.92-3.187.457"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.503 4.474-2.94-2.453a.1.1 0 0 0-.128 0l-2.938 2.46H5.09a.1.1 0 0 0-.1.1v4.407l-2.464 2.939a.1.1 0 0 0 0 .129l2.463 2.94v4.414a.1.1 0 0 0 .1.1l4.421.02 2.927 2.449a.1.1 0 0 0 .128 0l2.945-2.45h4.404a.1.1 0 0 0 .1-.1v-4.42l2.462-2.939a.1.1 0 0 0 0-.128l-2.46-2.955V4.575a.1.1 0 0 0-.1-.1z"
      />
    </svg>
  );
};
export default Muhammad;
