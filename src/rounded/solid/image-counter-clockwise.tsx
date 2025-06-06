import React from "react";
const ImageCounterClockwise: React.FC<
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
        d="M14.728 3.182a.75.75 0 0 0-1.455-.364l-1 4a.75.75 0 0 0 .521.903l3.5 1a.75.75 0 1 0 .412-1.442l-2.289-.654a4.25 4.25 0 0 1 5.984 5.925.75.75 0 0 0 1.2.901 5.75 5.75 0 0 0-7.308-8.524zM8.346 6.25h2.78l-.066.265a2 2 0 0 0 1.391 2.408l3.5 1a2 2 0 0 0 2.437-1.26 5.5 5.5 0 0 1 .238 1.043c.124.898.124 2.041.124 3.46v1.668c0 1.419 0 2.561-.124 3.46-.13.934-.406 1.715-1.04 2.332-.632.615-1.427.88-2.377 1.004-.92.12-2.092.12-3.555.12H8.346c-1.463 0-2.634 0-3.554-.12-.951-.125-1.746-.39-2.378-1.004-.634-.617-.91-1.398-1.04-2.332-.124-.899-.124-2.041-.124-3.46v-1.668c0-1.419 0-2.562.124-3.46.13-.935.406-1.715 1.04-2.333.632-.614 1.427-.879 2.378-1.003.92-.12 2.091-.12 3.554-.12m.146 5.24a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zm-5.63 6.599c.105.76.297 1.168.6 1.462.305.297.734.488 1.526.591.811.106 1.885.108 3.414.108h3.2c1.529 0 2.602-.002 3.414-.108.792-.103 1.22-.294 1.526-.591.302-.294.494-.702.6-1.462.043-.313.07-.667.085-1.074l-3.793-3.744a.97.97 0 0 0-.681-.271.98.98 0 0 0-.654.245L8.423 16.57l-1.706-1.543a.97.97 0 0 0-.647-.242.96.96 0 0 0-.683.277l-2.57 2.617q.018.215.045.409"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageCounterClockwise;
