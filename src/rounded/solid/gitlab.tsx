import React from "react";
const Gitlab: React.FC<
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
        d="M5.182 1.252a.75.75 0 0 1 .741.452L8.782 8.36c.134.312.212.492.283.618.061.108.092.126.212.14.145.015.341.016.682.016h4.093c.341 0 .538-.001.683-.017.115-.012.153-.036.211-.139a7 7 0 0 0 .284-.618l2.859-6.655a.75.75 0 0 1 1.413.098l3.038 11.116c.08.289.153.56.19.795a1.7 1.7 0 0 1-.518 1.555c-.172.165-.394.338-.63.521l-7.898 6.129c-.274.213-.53.41-.762.55-.258.155-.555.282-.916.282s-.659-.127-.917-.282a8 8 0 0 1-.76-.55L2.43 15.789c-.236-.183-.459-.356-.63-.521a1.7 1.7 0 0 1-.52-1.555c.038-.235.113-.506.191-.795L4.51 1.802a.75.75 0 0 1 .672-.55"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gitlab;
