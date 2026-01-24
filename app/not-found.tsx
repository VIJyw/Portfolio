import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold text-foreground mb-4">
          404
        </h1>
        <p className="text-xl text-muted mb-8">
          Page not found. The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
