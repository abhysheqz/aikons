import React from "react";
const UploadCircle_02: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12M12 18a1 1 0 0 0 1-1v-3.128h.57c.072 0 .216 0 .343-.018.115-.016.63-.1.867-.636.238-.534-.044-.973-.109-1.07a2.5 2.5 0 0 0-.217-.266l-.013-.014-.672-.745c-.22-.244-.447-.496-.664-.679-.246-.208-.61-.444-1.105-.444s-.86.236-1.105.444a8 8 0 0 0-.664.68l-.672.744-.013.014a2.5 2.5 0 0 0-.217.267c-.065.096-.347.535-.11 1.07.239.534.753.619.868.635.127.018.271.018.344.018H11V17a1 1 0 0 0 1 1M8 7a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UploadCircle_02;
