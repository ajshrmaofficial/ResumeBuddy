import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function NavBar() {
  return (
    <nav className="[height:var(--navbar-height)]">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>
    </nav>
  );
}
