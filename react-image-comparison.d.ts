declare module 'react-image-comparison' {
    interface ImageComparisonProps {
      leftImage: string;
      rightImage: string;
      defaultImage: string;
      matchingWidth: number;
      className?: string;
      style?: React.CSSProperties;
      // ... 其他属性，根据插件文档添加
    }

    class ImageComparison extends React.Component<ImageComparisonProps> {
      // ... 其他方法，根据插件文档添加
    }

    export default ImageComparison;
  }