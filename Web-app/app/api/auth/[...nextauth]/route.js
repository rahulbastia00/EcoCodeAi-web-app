import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import connectDb from '../../../../db/connectDb'
import User from '../../../../models/User';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider == "github") { 
        await connectDb()
        // Check if the user already exists in the database
        const currentUser = await User.findOne({email: user.email})
        
        if(!currentUser){
          // Create a new user only ifthey don't exist
          await User.create({
            name:user.name,
            email: user.email, 
            username: user.email.split("@")[0], 
          })   
        } 
        return true
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({email: session.user.email})
  
      session.user.name = dbUser.username
      return session
    },
  } 
});

export { handler as GET, handler as POST };

