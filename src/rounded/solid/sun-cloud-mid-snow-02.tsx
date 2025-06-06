import React from "react";
const SunCloudMidSnow_02: React.FC<
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
        d="M12.125 14.875a1 1 0 0 1 1 1v1.234l.986-.592a1 1 0 1 1 1.028 1.715l-1.07.643 1.07.642a1 1 0 0 1-1.029 1.715l-.985-.59v1.233a1 1 0 1 1-2 0V20.64l-.985.591a1 1 0 0 1-1.03-1.715l1.071-.642-1.07-.643a1 1 0 0 1 1.028-1.715l.986.592v-1.234a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.064 9.093c-.05.196-.074.294-.13.352s-.155.085-.35.14a5.75 5.75 0 0 0-4.21 5.54c0 2.927 2.231 5.344 5.068 5.704.294.037.441.056.54-.024s.118-.273.154-.661c.029-.308.114-.61.253-.887.103-.208.155-.311.155-.382 0-.07-.052-.174-.155-.382A2.498 2.498 0 0 1 9.4 14.885c.222-.02.333-.03.392-.066.059-.035.12-.128.242-.314a2.498 2.498 0 0 1 4.183 0c.122.186.183.279.242.314.059.036.17.046.391.066a2.498 2.498 0 0 1 2.012 3.608c-.104.208-.156.311-.156.382 0 .07.052.174.156.382.166.333.256.7.263 1.072.004.207.006.31.029.364.036.083.08.126.163.16.055.022.139.022.308.022a5.25 5.25 0 0 0 1.242-10.352c-.243-.06-.365-.089-.427-.16-.063-.07-.077-.194-.104-.439a6.25 6.25 0 0 0-12.272-.831"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.23 1.16a1 1 0 0 1 1.227.703l.017.062a6.2 6.2 0 0 1 2.804.365l.125-.213a1 1 0 0 1 1.726 1.01l-.114.196q.484.391.883.878a1 1 0 1 1-1.546 1.268 4.2 4.2 0 0 0-1.175-.986 4.24 4.24 0 0 0-3.173-.406 4.15 4.15 0 0 0-2.54 1.918 4.03 4.03 0 0 0-.415 3.101c.149.545.4 1.032.73 1.45a1 1 0 0 1-1.571 1.238 6 6 0 0 1-.75-1.226l-.078.02a1 1 0 1 1-.51-1.933l.066-.017a6 6 0 0 1 .364-2.73l-.206-.118a1 1 0 0 1 .99-1.737l.224.127a6.15 6.15 0 0 1 2.233-1.692l-.014-.05a1 1 0 0 1 .702-1.228"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudMidSnow_02;
