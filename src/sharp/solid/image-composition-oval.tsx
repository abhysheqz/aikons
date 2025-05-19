import React from "react";
const ImageCompositionOval: React.FC<
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
        d="M1.6 4.366c6.568-4.155 14.232-4.155 20.8 0l.35.221v11.86l-.393-.211-.016-.009c-1.271-.644-2.602-.978-3.951-.977-1.677-.006-3.317.5-4.85 1.459a12 12 0 0 0-1.23-.988c-2.355-1.657-5.296-2.526-8.3-2.468q-1.059-.003-2.106.139l-.654.082V4.587zm20.055 13.195 1.095.589v1.263l-.35.22a20.3 20.3 0 0 1-5.578 2.474l-.102-.322a10.6 10.6 0 0 0-2.117-3.967c1.242-.72 2.52-1.073 3.786-1.068 1.093-.001 2.19.267 3.266.811m-6.368 4.666.067.214c-4.643.86-9.436-.075-13.755-2.807l-.349-.221v-4.427l.845-.107h.007a14 14 0 0 1 1.913-.126h.017c2.705-.054 5.333.73 7.414 2.195 1.929 1.357 3.264 3.21 3.833 5.253zM7.5 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageCompositionOval;
