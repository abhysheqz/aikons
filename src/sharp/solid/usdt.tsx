import React from "react";
const Usdt: React.FC<
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
        d="M20.25 2.25H3.75v4.5h6v4.447a47 47 0 0 0 4.5 0V6.75h6zM9.75 13.7v8.05h4.5V13.7a50 50 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        d="M14.25 9.802V8.3c2.14.097 4.045.33 5.473.659.787.18 1.47.4 1.974.665.251.132.495.294.685.5.194.208.368.504.368.876 0 .41-.211.727-.429.94-.216.21-.495.379-.786.516-.587.278-1.387.508-2.317.694-1.871.374-4.423.6-7.218.6s-5.347-.226-7.218-.6c-.93-.186-1.73-.416-2.317-.694a2.9 2.9 0 0 1-.786-.517c-.218-.212-.429-.528-.429-.94 0-.371.174-.667.368-.876.19-.205.434-.367.685-.499.504-.264 1.187-.484 1.974-.665 1.428-.33 3.332-.562 5.473-.66v1.503c-2.052.095-3.836.319-5.136.618-.736.17-1.276.355-1.614.532L2.914 11q.079.046.192.1c.426.202 1.09.403 1.97.579 1.748.35 4.197.57 6.924.57s5.176-.22 6.924-.57c.88-.176 1.544-.377 1.97-.579q.114-.055.192-.1L21 10.952c-.338-.177-.878-.362-1.614-.532-1.3-.3-3.084-.523-5.136-.618"
      />
    </svg>
  );
};
export default Usdt;
