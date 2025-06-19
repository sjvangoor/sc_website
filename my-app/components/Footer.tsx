export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} Student Consultant</span>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com" className="hover:underline">LinkedIn</a>
          <a href="mailto:info@student-consultant.nl" className="hover:underline">Email</a>
          <a href="/privacy" className="hover:underline">Privacybeleid</a>
        </div>
      </div>
    </footer>
  );
}
