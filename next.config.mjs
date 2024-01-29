/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/list/1",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
