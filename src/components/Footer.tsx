export default function Footer() {
  return (
    <footer className="bg-primary text-white p-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-4 text-sm">
        <div>&copy; {new Date().getFullYear()} Student Consultant</div>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="https://www.linkedin.com" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:info@student-consultant.nl" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
