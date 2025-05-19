import React from "react";
const PencilEdit_02: React.FC<
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
        d="M4.917 5.944a.97.97 0 0 0-.973.973v11.666c0 .537.436.973.973.973h11.666a.97.97 0 0 0 .973-.973v-5.347a.972.972 0 0 1 1.944 0v5.347a2.917 2.917 0 0 1-2.917 2.917H4.917A2.917 2.917 0 0 1 2 18.583V6.917A2.917 2.917 0 0 1 4.917 4h5.347a.972.972 0 0 1 0 1.944z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.414 2.51a1.743 1.743 0 0 0-2.466 0l-1.747 1.748L19.24 8.3l1.748-1.747c.681-.681.681-1.785 0-2.466zM18.181 9.36l-4.04-4.041-5.539 5.538c-.35.35-.6.79-.72 1.271l-.86 3.44a.75.75 0 0 0 .91.91l3.44-.86c.481-.12.92-.37 1.271-.72z"
      />
    </svg>
  );
};
export default PencilEdit_02;
