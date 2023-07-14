import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default function Navigation() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <nav className="mb-5 flex flex-col items-center justify-between pt-24">
      <div>
        {isAuthenticated() ? (
          <LogoutLink className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Log out
          </LogoutLink>
        ) : (
          <>
            <LoginLink
              orgCode="org_0e0c38676739"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3"
            >
              Sign in
            </LoginLink>
            <RegisterLink
              orgCode="org_0e0c38676739"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-3"
            >
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
      <div className="mt-3">
        <Link href="/" className="mr-4">
          Frontpage
        </Link>
        <Link href="/profile" className="mr-4">
          Profile page
        </Link>
      </div>
    </nav>
  );
}
