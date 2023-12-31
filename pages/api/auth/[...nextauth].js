import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Ecommerce',
            credentials: {},
            async authorize(credentials) {
                const authResponse = await fetch(
                    'http://localhost:3000/api/user/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(credentials),
                    }
                );

                if (!authResponse.ok) {
                    return null;
                }

                const user = await authResponse.json();
                return user;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_CLIENT,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
    },
    debug: process.env.NODE_ENV === 'development',
});