import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero">
            <h1>ResumeBuddy</h1>
            <p>ATS friendly resume builder</p>
            <Link href="/builder">Get Started</Link>
        </div>
    )
}
