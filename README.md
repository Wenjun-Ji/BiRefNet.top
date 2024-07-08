# [BiRefNet.top](https://www.birefnet.top)
This project is an online demonstration website for our team's solution to the topic "General Scene Intelligent High-Precision Parsing Innovative Application based on Ascend MindSpore" in the China International College Students' Innovation Competition, industry proposition track. 

On this website, you can freely experience our solution, which may be the most powerful commercially available image matting model. However, it is not limited to this; it has much broader applications. For more details, please visit our website.

## [Home](https://www.birefnet.top):

![image](https://github.com/Wenjun-Ji/DIS/assets/128712119/14948028-ba16-48be-9ec7-696499f8a552)

## [Demo](https://www.birefnet.top/segment):

![image](https://github.com/Wenjun-Ji/DIS/assets/128712119/cf77b8d4-bc51-4e3a-95a6-c8d9f6b82dd3)

## How it works

It uses a [DIS](https://paperswithcode.com/task/dichotomous-image-segmentation) model called [BiRefNet](https://github.com/ZhengPeng7/BiRefNet) on [Replicate](https://replicate.com/) to segment images with high accuracy. This application gives you the ability to upload any photo, which will send it through this DIS Model using a Next.js API route, and return your segmented photo.

![Uploading c7429801a3856d872d7a1250f0a9442.png…]()


## Running Locally

### Cloning the repository the local machine.

```bash
git clone
```

### Creating a account on Replicate to get an API key.

1. Go to [Replicate](https://replicate.com/) to make an account.
2. Click on your profile picture in the top right corner, and click on "Dashboard".
3. Click on "Account" in the navbar. And, here you can find your API token, copy it.

### Storing API key in .env file.

Create a file in root directory of project with env. And store your API key in it, as shown in the .example.env file.

If you'd also like to do rate limiting, create an account on UpStash, create a Redis database, and populate the two environment variables in `.env` as well. If you don't want to do rate limiting, you don't need to make any changes.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Powered by

This example is powered by the following 3 services:

- [Replicate](https://replicate.com/men1scus/birefnet) (Our replicate API)
- [Upload](https://upload.io) (storage)
- [Vercel](https://vercel.com) (hosting, serverless functions, analytics)

### Thanks🥰🥰🥰
- [RestorePhotos.io](https://restorephotos.io/)(code basic)
