// import bcrypt from "bcrypt"
// import NextAuth, { AuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import {PrismaAdapter} from "@next-auth/prisma-adapter"
// import {prisma} from "@/pkg/database"

// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: {label: 'email', type: 'text'},
//         password: {label: 'password', type: 'password'}
//       },

//       async authorize(credentials) {
//         if(!credentials?.email || !credentials.password) {
//           throw new Error('invalid credentials')
//         }

//         const user = await prisma.user.findUnique({
//           where :{
//             email: credentials.email
//           }
//         })

//         if (!user || !user.password ) {
//           throw new Error('credentials not found')
//         }

//         const isCorrectPassword = await bcrypt.compare(credentials.password, user.password)

//         if(!isCorrectPassword) {
//           throw new Error('invalid password')
//         }
        
//         return user
//       }
//     })
//   ],
//   session: {
//     strategy: "jwt",
//     maxAge: 864000
//   },
//   secret: process.env.NEXTAUTH_SECRET, 
//   pages: {
//     signIn: '/auth/login',
//   }
// }

// const handler = NextAuth(authOptions)

// export {handler as GET, handler as POST}