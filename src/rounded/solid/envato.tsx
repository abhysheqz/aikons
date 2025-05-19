import React from "react";
const Envato: React.FC<
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
        d="M5.09 9.548c-.048 1.43.13 3.013.735 4.35.304.672.456 1.008.727.961.271-.046.3-.467.355-1.309.366-5.523 5.16-11.418 10.764-12.228.565-.082.848-.123 1.18.04.333.165.477.432.765.966 4.818 8.937 1.2 20.422-8.07 20.422C4.252 22.75-.1 14.357 3.59 8.865c.588-.875.882-1.313 1.22-1.21s.318.7.28 1.893"
      />
    </svg>
  );
};
export default Envato;
