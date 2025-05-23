import React from "react";
const SunCloudFastWind_02: React.FC<
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
        d="M7.26 1.705a1 1 0 0 0-1.932.508A5.6 5.6 0 0 0 3.42 3.646l-.135-.076a1 1 0 0 0-.981 1.743l.102.057a5.4 5.4 0 0 0-.309 2.29 1 1 0 0 0 .527 1.928q.272.56.652 1.036a1 1 0 1 0 1.563-1.248 3.5 3.5 0 0 1-.635-1.247 3.43 3.43 0 0 1 .36-2.663A3.63 3.63 0 0 1 6.79 3.807a3.77 3.77 0 0 1 2.807.363c.385.218.728.502 1.01.842a1 1 0 0 0 1.539-1.278 5.6 5.6 0 0 0-.733-.732l.05-.086a1 1 0 0 0-1.72-1.019l-.07.118a5.8 5.8 0 0 0-2.411-.31M14.828 20.049a.3.3 0 0 1 .163-.05c.138 0 .384.148.384.5 0 .354-.246.5-.384.5a.3.3 0 0 1-.104-.018 1 1 0 0 0-.715 1.867c.255.098.532.152.819.152 1.39 0 2.384-1.196 2.384-2.5s-.993-2.5-2.384-2.5c-.484 0-.933.152-1.303.405l-.017.012-.016.012c-.95.708-2.753 1.64-4.781 1.879a1 1 0 1 0 .234 1.986c2.425-.286 4.542-1.373 5.72-2.245m-11.346.05a1 1 0 0 1 1.343-.445 6.6 6.6 0 0 0 1.602.561 1 1 0 1 1-.412 1.957 8.6 8.6 0 0 1-2.09-.731 1 1 0 0 1-.443-1.343M18.375 21a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.125 13.522c0-2.53 1.885-4.64 4.389-5.123.51-2.645 2.94-4.649 5.86-4.649 3.23 0 5.858 2.447 5.957 5.502 2.428.33 4.294 2.32 4.294 4.724 0 2.368-1.808 4.332-4.18 4.708-.612-1.24-1.844-2.184-3.454-2.184q-.051 0-.101.002c.569-.944.45-2.007-.05-2.796a2.92 2.92 0 0 0-2.465-1.355c-1.534 0-2.9 1.174-2.9 2.77a1 1 0 1 0 2 0c0-.36.335-.77.9-.77.336 0 .62.177.775.423.15.237.156.487.021.704-.455.734-1.477 1.702-2.815 2.353q-.205.1-.406.204c-.696.356-1.396.714-2.343.714-3.027 0-5.482-2.34-5.482-5.227"
      />
    </svg>
  );
};
export default SunCloudFastWind_02;
