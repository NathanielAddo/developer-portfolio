import React from "react";
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled
const Lottie = dynamic(
  () => import('lottie-react'),
  { 
    ssr: false,
    loading: () => <div className="h-64 w-64 bg-gray-200 rounded-lg animate-pulse" />
  }
);

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    // Fetch the animation data
    fetch(animationPath)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, [animationPath]);

  if (!animationData) {
    return <div className="h-64 w-64 bg-gray-200 rounded-lg animate-pulse" />;
  }

  return (
    <div className="cursor-pointer">
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default GreetingLottie;