import React, { useState } from 'react';
import { HackerBadgeData, HackerBadgeFormat } from './types';
import { ASSETS } from './data/presetData';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { NavigationDrawer } from './components/NavigationDrawer';
import { HomeScreen } from './components/HomeScreen';
import { CreateFormScreen } from './components/CreateFormScreen';
import { PreviewScreen } from './components/PreviewScreen';
import { ShareModal } from './components/ShareModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'create' | 'preview'>('home');

  // Active working badge state
  const [currentBadge, setCurrentBadge] = useState<HackerBadgeData>({
    id: 'user-badge-1',
    name: '',
    handle: '',
    role: '',
    builderTitle: '',
    accessLevel: 'OMEGA',
    themeColor: '#00f5ff',
    photoUrl: '',
    format: 'B',
    createdAt: Date.now(),
    likesCount: 1,
    verified: true
  });

  // Modals state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Navigation handlers
  const handleStartCreate = (format: HackerBadgeFormat) => {
    setCurrentBadge((prev) => ({ ...prev, format }));
    setCurrentTab('create');
  };

  const handleGenerate = (updatedBadge: HackerBadgeData) => {
    setCurrentBadge(updatedBadge);
    setCurrentTab('preview');
  };

  const handleFormatChange = (format: HackerBadgeFormat) => {
    setCurrentBadge((prev) => ({ ...prev, format }));
  };

  return (
    <div className="min-h-screen text-white">       

      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <div className="relative z-10 grow flex flex-col">
        {currentTab === 'home' && (
          <HomeScreen
            onStartCreate={handleStartCreate}
          />
        )}
        
        {/* ADDED BACK: Create Form Screen */}
        {currentTab === 'create' && (
          <CreateFormScreen
            initialBadge={currentBadge}
            onGenerate={handleGenerate}
          />
        )}

        {currentTab === 'preview' && (
          <PreviewScreen
            badge={currentBadge}
            onChangeFormat={handleFormatChange}
            onEdit={() => setCurrentTab('create')}
            onOpenShareModal={() => setIsShareModalOpen(true)}
          />
        )}
      </div>

      {/* Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        badge={currentBadge}
      />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />
    </div>
  );
}