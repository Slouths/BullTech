import Header from '@/components/Header';
import Logo from '@/components/Logo';
import ContentSections from '@/components/ContentSections';

export default function Home() {
  return (
    <>
      {/* Fixed Logo - Always visible, changes color progressively */}
      <Logo />

      {/* Main Content */}
      <main className="relative w-full min-w-0 min-h-screen overflow-x-hidden">
        {/* Scrolling Content Sections */}
        <ContentSections />
      </main>
    </>
  );
}
