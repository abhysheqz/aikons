import React from "react";
const Liver: React.FC<
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
        d="M13.893 5.53c.2.152.374.308.53.46.41.405 1.257 1.525 1.426 1.72.497.573 1.129 1.074 2.152 1.074a.75.75 0 0 0 0-1.5c-.417 0-.671-.156-1.02-.558a56 56 0 0 0-.798-.996c-.284-.347-.426-.52-.378-.675.048-.154.253-.213.664-.33.887-.253 1.792-.428 2.621-.467.874-.04 1.77.064 2.473.494.762.466 1.187 1.247 1.187 2.275 0 1.925-1.249 3.57-2.73 4.712-1.237.952-2.746 1.644-4.133 1.907-.023.004-.034.007-.047.008l-.048.002a7 7 0 0 1-.701-.025c-1.463-.13-3.33-.796-5.55-3.094a.75.75 0 0 0-1.08 1.042c1.771 1.833 3.413 2.788 4.897 3.236.491.149.737.223.776.393s-.133.328-.476.644c-.436.403-.923.8-1.45 1.177-1.661 1.188-3.793 2.226-6.194 2.657-1.44.26-3.086-.275-3.818-1.743-.774-1.553-.946-3.398-.946-4.87 0-4.861 3.912-8.812 8.75-8.812 1.522 0 2.995.491 3.893 1.268"
      />
    </svg>
  );
};
export default Liver;
