import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src="https://i.sstatic.net/kOnzy.gif"
        width={500}
        height={500}
        alt="loading"
        className="w-96 mx-auto"
      />
    </div>
  );
};

export default LoadingPage;
