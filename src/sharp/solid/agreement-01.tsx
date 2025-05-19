import React from "react";
const Agreement_01: React.FC<
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
        d="M19 7.234h3V16h-3.5L13 9.5l-1.648 1.342c-.6.45-1.399.362-1.909-.212-.59-.665-.59-1.744 0-2.409l1.874-1.975A4 4 0 0 1 14.219 5h.455a4 4 0 0 1 2.39.792z"
      />
      <path
        fill="currentColor"
        d="m16.279 15.697-3.473-4.104-.507.412-.047.037c-1.247.936-2.922.72-3.93-.416-1.096-1.234-1.096-3.168 0-4.401l.033-.036 1.718-1.81-.466-.204c-.985-.409-2.07-.09-2.804.825l-.895 1H2v8.967h4l1.98 1.275c1.888 1.217 2.832 1.826 3.86 1.752l.146-.014c1.024-.122 1.826-.898 3.43-2.45z"
      />
    </svg>
  );
};
export default Agreement_01;
