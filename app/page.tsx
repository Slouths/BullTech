import Header from '@/components/Header';
import ContentSections from '@/components/ContentSections';

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="relative w-full min-w-0 min-h-screen overflow-x-hidden">
        {/* Scrolling Content Sections */}
        <ContentSections />
      </main>
    </>
  );
}
