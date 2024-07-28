function forceDownload(blobUrl: string, filename: string) {
  let a: any = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default async function downloadPhoto(url: string, filename: string, backgroundColor: string) {
  const image = new Image();
  image.crossOrigin = 'anonymous'; // 设置crossOrigin属性
  image.src = url;

  image.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.width = image.width;
    canvas.height = image.height;

    // Set the background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0);

    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const blobUrl = URL.createObjectURL(blob);
        forceDownload(blobUrl, filename);
      }
    }, 'image/png'); // 指定blob的MIME类型
  };

  image.onerror = (error) => {
    console.error("Image loading error:", error);
  };
}
