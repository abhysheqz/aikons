import React from "react";
const PinOff: React.FC<
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
        d="M8.957 15.043a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.71 2.553a6.2 6.2 0 0 1 3.736 3.738c.108.295.234.644.28.95a2.14 2.14 0 0 1-.118 1.083c-.291.81-.944 1.172-1.663 1.571l-1.418.791c-.512.286-.851.476-1.092.643-.235.162-.302.253-.33.307-.014.028-.06.166-.048.615q.004.124.012.267c.026.46.04.691-.087.747-.125.057-.286-.104-.608-.426l-5.237-5.237c-.319-.319-.478-.478-.422-.604.056-.125.284-.113.74-.09q.162.009.299.012c.214.004.485.023.626-.05.053-.028.143-.095.306-.331.167-.242.358-.582.644-1.096l.775-1.388c.399-.72.76-1.372 1.571-1.663a2.14 2.14 0 0 1 1.082-.118c.307.046.656.172.951.28M16.35 17.907c-.128.205-.29.464-.47.656a2.1 2.1 0 0 1-.775.516c-.322.13-.614.183-.93.169-.269-.012-.578-.082-.835-.141-1.976-.449-3.862-1.595-5.357-3.09s-2.641-3.381-3.09-5.357c-.059-.257-.129-.566-.14-.835a2.1 2.1 0 0 1 .169-.93c.128-.316.288-.562.515-.775.193-.18.451-.342.657-.47q.394-.245.8-.42c.112-.047.167-.07.227-.06.06.012.105.057.195.147l9.368 9.367c.09.09.134.135.145.195.012.06-.012.115-.06.226q-.172.407-.419.802"
      />
    </svg>
  );
};
export default PinOff;
