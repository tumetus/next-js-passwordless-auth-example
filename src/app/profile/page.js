import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Profile() {
  const { getUser, isAuthenticated, getBooleanFlag } = getKindeServerSession();
  const user = getUser();
  return (
    <div>
      {isAuthenticated() ? (
        <div>
          <h2>{`${user.given_name} ${user.family_name}`}</h2>
          <div>
            <p>{user.email}</p>
            {getBooleanFlag("is-user-json-visible", {
              defaultValue: false,
            }) && <pre>{JSON.stringify(user, null, 4)}</pre>}
          </div>
        </div>
      ) : (
        <div>Please log in.</div>
      )}
    </div>
  );
}
