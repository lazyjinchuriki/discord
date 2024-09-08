# Discord

A comprehensive Discord clone built with **Next.js**, providing real-time messaging, voice and video calls, and channel management. Built using modern web technologies, including **Tailwind CSS**, **Clerk** for authentication, **LiveKit** for voice/video, **Socket.io** for live messaging, and **Prisma** with **MongoDB** for robust data management.

## Tech Stacks

![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Clerk](https://img.shields.io/badge/-Clerk-453C81?style=for-the-badge&logo=clerk&logoColor=white) ![LiveKit](https://img.shields.io/badge/-LiveKit-FF5400?style=for-the-badge&logo=livekit&logoColor=white) ![Socket.io](https://img.shields.io/badge/-Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white) ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Tanstack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

## Features

- **Real-Time Messaging**: Experience live messaging with **Socket.io** for low latency.
- **Voice and Video Calls**: High-quality voice and video calling powered by **LiveKit**.
- **User Authentication**: Secure user access with **Clerk**.
- **Channel Management**: Create, manage, and invite users to different channels.
- **Role-Based Access Control**: Assign roles and manage user permissions within channels.
- **Media Sharing**: Share images, files, and other media seamlessly within channels using **UploadThing**.
- **Customizable Channels**: Create channels with customizable properties for an enhanced experience.
- **Responsive Design**: The UI is fully responsive and works seamlessly across all devices.
- **Modern UI Components**: Built with **Tailwind CSS** and **ShadCN** for a modern, clean, and aesthetic user interface.
- **Database Management**: **MongoDB** with **Prisma ORM** for seamless database interactions and schema management.
- **Infinite Loading**: Efficiently load messages with infinite scrolling using **TanStack Query**.

## Screenshots

![Screenshot 1](./assets/screenshot1.png)
![Screenshot 2](./assets/screenshot2.png)
![Screenshot 3](./assets/screenshot3.png)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/lazyjinchuriki/discord.git
   cd discord
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up


DATABASE_URL="mongodb+srv://your-mongodb-url"
NODE_ENV=development

UPLOADTHING_SECRET=sk_live_your_uploadthing_secret

LIVEKIT_API_KEY=""
LIVEKIT_API_SECRET=""
NEXT_PUBLIC_LIVEKIT_URL=wss://your-livekit-url

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Set up Prisma and MongoDB**:

   Initialize Prisma and apply the schema to your MongoDB database:

   ```bash
   npx prisma init
   npx prisma db push
   ```

   This will generate the necessary Prisma client for interacting with MongoDB.

5. **Start the development server**:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

Once the server is running, you can access all features such as creating channels, managing users, conducting voice/video calls, and more.

## Customization

You can customize the app by editing the files in the `/app/` and `/components/` directories. Each feature is modular, making it easy to enhance or modify.

## Contributions

Contributions are welcome! Please create an issue or submit a pull request to help improve the project.

## Contact

If you have any questions or feedback, feel free to reach out at [rahulkhushalani@proton.me](mailto:rahulkhushalani@proton.me).

### Support

If you found this project helpful, consider supporting me:

<a href="https://www.buymeacoffee.com/lazyjinchuriki">
  <img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" width="150" height="50">
</a>

## Social

Follow me on my social channels for more updates:

[![Instagram](https://img.shields.io/badge/Instagram-%40amundaneguy-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/amundaneguy/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rahul%20Khushalani-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rahul-khushalani-77ab21201/)

---
