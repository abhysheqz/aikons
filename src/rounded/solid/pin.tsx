import React from "react";
const Pin: React.FC<
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
        d="M8.957 15.043a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.71 2.553a6.2 6.2 0 0 1 3.736 3.738c.108.295.234.644.28.95a2.14 2.14 0 0 1-.118 1.083c-.291.81-.944 1.172-1.663 1.571l-1.418.791c-.512.286-.851.476-1.092.643-.235.162-.302.253-.33.307-.014.028-.06.166-.048.615.012.423.067.998.145 1.815.128 1.318-.091 2.624-.852 3.84-.128.206-.29.465-.47.657a2.1 2.1 0 0 1-.775.516c-.322.13-.614.183-.93.169-.269-.012-.578-.082-.835-.141-1.976-.449-3.862-1.595-5.357-3.09s-2.641-3.381-3.09-5.357c-.059-.257-.129-.566-.14-.835a2.1 2.1 0 0 1 .169-.93c.128-.316.288-.562.515-.775.193-.18.451-.342.657-.47 1.2-.75 2.495-.98 3.803-.865.835.074 1.424.126 1.857.135.214.004.485.023.626-.05.053-.028.143-.095.306-.331.167-.242.358-.582.644-1.096l.775-1.388c.399-.72.76-1.372 1.571-1.663a2.14 2.14 0 0 1 1.082-.118c.307.046.656.172.951.28"
      />
    </svg>
  );
};
export default Pin;
