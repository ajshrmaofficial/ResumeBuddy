export default async function Profile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
  return (
    <div>
      <h1>Profile page</h1>
      <h2>Welcome {username}</h2>
    </div>
  );
}
